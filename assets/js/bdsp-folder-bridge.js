(function () {
  const CURRENT_SCRIPT_BASE_URL = (() => {
    try {
      if (document.currentScript?.src) {
        return new URL('.', document.currentScript.src);
      }
      const matchingScript = Array.from(document.scripts || []).find(script => /bdsp-folder-bridge\.js(?:\?|$)/i.test(script?.src || ''));
      if (matchingScript?.src) {
        return new URL('.', matchingScript.src);
      }
    } catch (error) {}
    return new URL('./assets/js/', window.location.href);
  })();

  function resolveBridgeUrl(relativePath) {
    return new URL(relativePath, CURRENT_SCRIPT_BASE_URL).href;
  }

  const REQUIRED_SIGNATURE_SUFFIXES = [
    'romfs/data/streamingassets/assetassistant/dpr/masterdatas',
    'romfs/data/streamingassets/assetassistant/pml/personal_masterdatas',
    'romfs/data/streamingassets/assetassistant/battle/battle_masterdatas',
  ];

  const CUSTOM_REQUIRED_SUFFIXES = [
    ...REQUIRED_SIGNATURE_SUFFIXES,
    'romfs/data/streamingassets/assetassistant/message/common_msbt',
  ];

  const CUSTOM_LANGUAGE_SUFFIXES = {
    fr: 'romfs/data/streamingassets/assetassistant/message/french',
    en: 'romfs/data/streamingassets/assetassistant/message/english',
  };

  const KNOWN_SIGNATURES = {
    '37724f268931c997a6e1826111d462cd5618a37e648164f1d40896ef60fe6ef5|5a71cfafd53af31a6cd45ab66e13c7080914b548d511e6f0f68925f74e5dc919|c97eb0f3291fa61c4633f552b38843643101fc60e947961fd9ec181f5c92205e': 'bdsp',
    '2f15b5f258051294b9fe51ef4710cc4385c5463131ece746ae95725c260166bf|bfe5505d3e62da1e8d9d5eb9a7eda6a0b7027f97e2ba27e1f08f00a73d1c8584|d5a799bbbac73ee2cd1b2968aa71f0b3a442d1b7902b61d396c86cc1a654156c': 'luminescent',
  };
  const TITLE_IDS = {
    diamond: '0100000011D90000',
    pearl: '010018E011D92000',
  };

  let archiveModulePromise = null;
  let archiveGlobalPromise = null;
  let parserModulePromise = null;

  function getLibarchiveInitOptions() {
    const inline = window.LIBARCHIVE_INLINE;
    if (inline?.workerSource && inline?.wasmBase64) {
      return {
        getWorker() {
          const wasmUrl = `data:application/wasm;base64,${inline.wasmBase64}`;
          const workerSource = [
            `self.__LIBARCHIVE_WASM_URL = ${JSON.stringify(wasmUrl)};`,
            `self.__LIBARCHIVE_WORKER_BASE_URL = ${JSON.stringify(resolveBridgeUrl('../vendor/libarchivejs/worker-bundle.js'))};`,
            inline.workerSource,
          ].join('\n');
          const workerUrl = URL.createObjectURL(new Blob([workerSource], { type: 'text/javascript' }));
          return new Worker(workerUrl);
        },
      };
    }

    return {
      workerUrl: resolveBridgeUrl('../vendor/libarchivejs/worker-bundle.js'),
    };
  }

  function getUiLang() {
    return document.body.classList.contains('lang-en') ? 'en' : 'fr';
  }

  function normalizeFolderPath(rawPath) {
    const cleaned = String(rawPath || '').replace(/\\/g, '/').replace(/^\/+/, '');
    const lower = cleaned.toLowerCase();
    const romfsIndex = lower.indexOf('/romfs/');
    if (romfsIndex >= 0) return cleaned.slice(romfsIndex + 1);
    if (lower.startsWith('romfs/')) return cleaned;
    const assetIndex = lower.indexOf('data/streamingassets/assetassistant/');
    if (assetIndex >= 0) return `romfs/${cleaned.slice(assetIndex)}`;
    return cleaned;
  }

  function getTopFolderName(files) {
    const first = Array.from(files || []).find(file => file.webkitRelativePath);
    if (!first) return '';
    const normalized = String(first.webkitRelativePath || '').replace(/\\/g, '/');
    return normalized.split('/')[0] || '';
  }

  function getPreferredLanguage() {
    return getUiLang() === 'en' ? 'en' : 'fr';
  }

  function getCustomLanguageSuffix(lookup, preferredLanguage) {
    const preferred = preferredLanguage === 'en' ? 'en' : 'fr';
    if (lookup.has(CUSTOM_LANGUAGE_SUFFIXES[preferred])) {
      return CUSTOM_LANGUAGE_SUFFIXES[preferred];
    }
    const fallbackLang = preferred === 'fr' ? 'en' : 'fr';
    if (lookup.has(CUSTOM_LANGUAGE_SUFFIXES[fallbackLang])) {
      return CUSTOM_LANGUAGE_SUFFIXES[fallbackLang];
    }
    return '';
  }

  function stripArchivePath(rawPath) {
    const cleaned = String(rawPath || '').replace(/\\/g, '/').replace(/^\/+/, '');
    const lower = cleaned.toLowerCase();
    const romfsIndex = lower.indexOf('/romfs/');
    if (romfsIndex >= 0) return cleaned.slice(romfsIndex + 1);
    if (lower.startsWith('romfs/')) return cleaned;
    return cleaned;
  }

  function getArchiveRawEntryPath(entry) {
    const folder = String(entry?.path || '').replace(/\\/g, '/');
    const name = String(entry?.file?.name || '');
    return `${folder}${name}`.replace(/\\/g, '/').replace(/^\/+/, '');
  }

  function inferArchiveTopFolderName(entries, fallbackName = '') {
    const counts = new Map();
    const bump = value => {
      const clean = String(value || '').trim();
      if (!clean) return;
      counts.set(clean, (counts.get(clean) || 0) + 1);
    };

    for (const entry of entries || []) {
      const raw = getArchiveRawEntryPath(entry);
      if (!raw) continue;
      const parts = raw.split('/').filter(Boolean);
      if (!parts.length) continue;
      const assetRootIndex = parts.findIndex(part => /^(romfs|exefs)$/i.test(part));
      if (assetRootIndex > 0) {
        bump(parts[assetRootIndex - 1]);
        continue;
      }
      if (parts.length > 1) bump(parts[0]);
    }

    let best = fallbackName;
    let bestCount = -1;
    for (const [name, count] of counts.entries()) {
      if (count > bestCount) {
        best = name;
        bestCount = count;
      }
    }
    return best || fallbackName || '';
  }

  function guessVariant(folderName) {
    const lower = stripDiacritics(String(folderName || '').toLowerCase());
    if (lower.includes(TITLE_IDS.pearl.toLowerCase())) return 'pearl';
    if (lower.includes(TITLE_IDS.diamond.toLowerCase())) return 'diamond';
    if (/\bsp\b|perle|pearl|shining|scintillante/.test(lower)) return 'pearl';
    if (/\bbd\b|diamant|diamond|brilliant|etincelant/.test(lower)) return 'diamond';
    return 'diamond';
  }

  function findSignatureFiles(fileList) {
    const files = Array.from(fileList || []).map(file => ({
      file,
      relativePath: normalizeFolderPath(file.webkitRelativePath || file.name),
    }));
    const lookup = new Map(files.map(entry => [entry.relativePath.toLowerCase(), entry]));
    const selected = [];
    const missing = [];
    for (const suffix of REQUIRED_SIGNATURE_SUFFIXES) {
      const entry = lookup.get(suffix);
      if (entry) selected.push(entry);
      else missing.push(suffix);
    }
    return { selected, missing };
  }

  function findCustomFolderFiles(fileList, preferredLanguage) {
    const files = Array.from(fileList || []).map(file => ({
      file,
      relativePath: normalizeFolderPath(file.webkitRelativePath || file.name),
    }));
    const lookup = new Map(files.map(entry => [entry.relativePath.toLowerCase(), entry]));
    const languageSuffix = getCustomLanguageSuffix(lookup, preferredLanguage);
    const selected = [];
    const missing = [];

    for (const suffix of CUSTOM_REQUIRED_SUFFIXES) {
      const entry = lookup.get(suffix);
      if (entry) selected.push(entry);
      else missing.push(suffix);
    }

    if (!languageSuffix) {
      missing.push(CUSTOM_LANGUAGE_SUFFIXES[getPreferredLanguage()]);
    } else {
      selected.push(lookup.get(languageSuffix));
    }

    return { selected, missing, languageSuffix };
  }

  async function sha256HexFromArrayBuffer(buffer) {
    const hash = await crypto.subtle.digest('SHA-256', buffer);
    return Array.from(new Uint8Array(hash)).map(byte => byte.toString(16).padStart(2, '0')).join('');
  }

  async function sha256HexFromFile(file) {
    return sha256HexFromArrayBuffer(await file.arrayBuffer());
  }

  function getSlugForProfile(profile, variant, lang) {
    const language = lang === 'en' ? 'en' : 'fr';
    if (profile === 'luminescent') {
      return variant === 'pearl'
        ? `luminescent_platinum_sp_${language}`
        : `luminescent_platinum_bd_${language}`;
    }
    return variant === 'pearl'
      ? `bdsp_pearl_${language}`
      : `bdsp_diamond_${language}`;
  }

  function getRegionForVariant(variant) {
    return variant === 'pearl' ? 'sp' : 'bd';
  }

  async function loadMatchedDataset(slug, topFolderName, profile) {
    const entry = (typeof getVanillaManifest === 'function' ? getVanillaManifest() : [])
      .find(row => row.slug === slug);
    if (!entry) throw new Error(`Dataset introuvable : ${slug}`);

    setGlobalLoadingProgress(72, getUiLang() === 'fr' ? 'Chargement du dataset intégré…' : 'Loading built-in dataset…');
    await waitForLoadingFrame();
    const raw = await ensureVanillaScriptLoaded(slug);
    if (!raw) throw new Error('Dataset vide');

    setGlobalLoadingProgress(88, getUiLang() === 'fr' ? 'Application des données…' : 'Applying dataset…');
    await waitForLoadingFrame();
    setLang((entry.language || 'fr') === 'fr' ? 'fr' : 'en');
    vanillaMenuGame = entry.game || '';
    await applyJSONData(raw, topFolderName || entry.sourceFile || entry.file || `${slug}.json`);
    renderVanillaOptionsMenu();
    showToast(
      getUiLang() === 'fr'
        ? `✅ ${profile === 'luminescent' ? 'Dossier Luminescent reconnu' : 'Dossier BDSP reconnu'} : ${entry.title}`
        : `✅ ${profile === 'luminescent' ? 'Luminescent folder recognized' : 'BDSP folder recognized'}: ${entry.title}`
    );
    const dd = document.getElementById('options-dropdown');
    if (dd) dd.classList.remove('open');
  }

  async function getParserModule() {
    if (window.BdspCustomParserGlobal?.parseBdspCustomBuffers) {
      return window.BdspCustomParserGlobal;
    }
    if (!parserModulePromise) {
      parserModulePromise = import(resolveBridgeUrl('./parsers/bdsp-custom-parser.browser.js')).catch(error => {
        parserModulePromise = null;
        throw error;
      });
    }
    return parserModulePromise;
  }

  async function loadArchiveGlobalScript() {
    if (window.LibArchiveGlobal?.Archive) return window.LibArchiveGlobal;
    if (!archiveGlobalPromise) {
      archiveGlobalPromise = (async () => {
        if (!window.LIBARCHIVE_INLINE) {
          await new Promise((resolve, reject) => {
            const existingInline = document.querySelector('script[data-libarchive-inline="1"]');
            if (existingInline) {
              if (window.LIBARCHIVE_INLINE) return resolve();
              existingInline.addEventListener('load', resolve, { once: true });
              existingInline.addEventListener('error', reject, { once: true });
              return;
            }
            const script = document.createElement('script');
            script.src = resolveBridgeUrl('../vendor/libarchivejs/libarchive-inline.js');
            script.dataset.libarchiveInline = '1';
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
          }).catch(() => null);
        }

        await new Promise((resolve, reject) => {
          const existingGlobal = document.querySelector('script[data-libarchive-global="1"]');
          if (existingGlobal) {
            if (window.LibArchiveGlobal?.Archive) return resolve();
            existingGlobal.addEventListener('load', resolve, { once: true });
            existingGlobal.addEventListener('error', reject, { once: true });
            return;
          }
          const script = document.createElement('script');
          script.src = resolveBridgeUrl('../vendor/libarchivejs/libarchive.global.js');
          script.dataset.libarchiveGlobal = '1';
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });

        if (!window.LibArchiveGlobal?.Archive) {
          throw new Error(
            getUiLang() === 'fr'
              ? 'Le module libarchive global est introuvable.'
              : 'The global libarchive module could not be loaded.'
          );
        }
        return window.LibArchiveGlobal;
      })().catch(error => {
        archiveGlobalPromise = null;
        throw error;
      });
    }
    return archiveGlobalPromise;
  }

  async function parseCustomInWorker(fileEntries, options) {
    const parserModule = await getParserModule();
    if (!parserModule || typeof parserModule.parseBdspCustomBuffers !== 'function') {
      throw new Error(
        getUiLang() === 'fr'
          ? 'Le module du parseur BDSP / Lumi est introuvable.'
          : 'The BDSP / Lumi parser module could not be loaded.'
      );
    }

    return parserModule.parseBdspCustomBuffers(fileEntries, {
      ...(options || {}),
      reportProgress(progress) {
        const percent = Number(progress?.percent);
        const stage = String(progress?.stage || '');
        const detail = String(progress?.detail || '');
        if (Number.isFinite(percent)) {
          setGlobalLoadingProgress(percent, detail || stage || 'Parsing custom BDSP / Lumi…');
        } else if (detail || stage) {
          setGlobalLoadingProgress(48, detail || stage);
        }
      },
    });
  }

  async function applyCustomDataset(dataset, sourceName, successMessage) {
    setGlobalLoadingProgress(88, getUiLang() === 'fr' ? 'Application des données…' : 'Applying parsed data…');
    await waitForLoadingFrame();
    setLang((dataset?.meta?.language || 'fr') === 'en' ? 'en' : 'fr');
    vanillaMenuGame = dataset?.meta?.game || '';
    await applyJSONData(dataset, sourceName || dataset?.meta?.sourceFile || 'custom_bdsp');
    renderVanillaOptionsMenu();
    showToast(successMessage);
    const dd = document.getElementById('options-dropdown');
    if (dd) dd.classList.remove('open');
  }

  async function classifyBySignature(signatureHashes, folderName) {
    const signature = signatureHashes.join('|');
    const profile = KNOWN_SIGNATURES[signature];
    if (!profile) return null;
    return {
      profile,
      variant: guessVariant(folderName),
      slug: getSlugForProfile(profile, guessVariant(folderName), getUiLang()),
      region: getRegionForVariant(guessVariant(folderName)),
    };
  }

  async function parseBdspFolder(fileList) {
    const lang = getUiLang();
    const topFolderName = getTopFolderName(fileList);
    const preferredLanguage = getPreferredLanguage();
    const customSelection = findCustomFolderFiles(fileList, preferredLanguage);
    const { selected, missing } = findSignatureFiles(fileList);
    let customParseError = null;

    showGlobalLoading(
      lang === 'fr' ? 'Analyse dossier BDSP / Lumi' : 'Analyzing BDSP / Lumi folder',
      lang === 'fr'
        ? `Reconnaissance de ${topFolderName || 'ton dossier'}…`
        : `Recognizing ${topFolderName || 'your folder'}…`
    );
    await waitForLoadingFrame();

    if (!customSelection.missing.length) {
      const buffers = [];
      for (let index = 0; index < customSelection.selected.length; index += 1) {
        const entry = customSelection.selected[index];
        const progress = 8 + Math.round(((index + 1) / customSelection.selected.length) * 32);
        setGlobalLoadingProgress(
          progress,
          lang === 'fr'
            ? `Lecture bundle ${index + 1}/${customSelection.selected.length}…`
            : `Reading bundle ${index + 1}/${customSelection.selected.length}…`
        );
        await waitForLoadingFrame();
        buffers.push({
          path: entry.relativePath,
          buffer: await entry.file.arrayBuffer(),
        });
      }

      try {
        setGlobalLoadingProgress(48, lang === 'fr' ? 'Parsing custom BDSP / Lumi…' : 'Parsing custom BDSP / Lumi…');
        await waitForLoadingFrame();
        const dataset = await parseCustomInWorker(buffers, {
          language: preferredLanguage,
          topFolderName,
          sourceFile: topFolderName,
        });
        await applyCustomDataset(
          dataset,
          topFolderName,
          lang === 'fr'
            ? `✅ Dossier custom analysé : ${dataset?.meta?.title || topFolderName}`
            : `✅ Custom folder parsed: ${dataset?.meta?.title || topFolderName}`
        );
        return;
      } catch (customError) {
        customParseError = customError;
        console.warn('BDSP custom folder parser failed, falling back to signature match.', customError);
      }
    }

    if (missing.length) {
      throw new Error(
        lang === 'fr'
          ? `Dossier incomplet : fichiers AssetAssistant manquants (${missing.length})`
          : `Incomplete folder: missing AssetAssistant files (${missing.length})`
      );
    }

    const hashes = [];
    for (let index = 0; index < selected.length; index += 1) {
      const entry = selected[index];
      const progress = 12 + Math.round(((index + 1) / selected.length) * 40);
      setGlobalLoadingProgress(
        progress,
        lang === 'fr'
          ? `Empreinte fichier ${index + 1}/${selected.length}…`
          : `Fingerprinting file ${index + 1}/${selected.length}…`
      );
      await waitForLoadingFrame();
      hashes.push(await sha256HexFromFile(entry.file));
    }

    const match = await classifyBySignature(hashes, topFolderName);
    if (!match) {
      if (customParseError) {
        throw new Error(
          lang === 'fr'
            ? `Le dossier BDSP / Lumi a bien été détecté, mais le parseur custom a échoué : ${String(customParseError?.message || customParseError)}`
            : `The BDSP / Lumi folder was detected, but the custom parser failed: ${String(customParseError?.message || customParseError)}`
        );
      }
      throw new Error(
        lang === 'fr'
          ? 'Dossier BDSP/Lumi non reconnu. Vérifie que le dossier contient bien les bundles Unity AssetAssistant attendus.'
          : 'Unrecognized BDSP/Lumi folder. Make sure the folder contains the expected Unity AssetAssistant bundles.'
      );
    }

    await loadMatchedDataset(match.slug, topFolderName, match.profile);
  }

  async function getArchiveModule() {
    if (window.LibArchiveGlobal?.Archive) {
      return window.LibArchiveGlobal;
    }
    if (!archiveModulePromise) {
      archiveModulePromise = loadArchiveGlobalScript().catch(error => {
        archiveModulePromise = null;
        throw error;
      });
    }
    return archiveModulePromise;
  }

  function getArchiveEntryPath(entry) {
    return stripArchivePath(getArchiveRawEntryPath(entry));
  }

  async function extractArchiveSignatureFiles(archiveFile) {
    const mod = await getArchiveModule();
    const { Archive } = mod;
    Archive.init(getLibarchiveInitOptions());
    const archive = await Archive.open(archiveFile);
    const filesArray = await archive.getFilesArray();
    const topFolderName = inferArchiveTopFolderName(
      filesArray,
      String(archiveFile?.name || '').replace(/\.(zip|rar|7z)$/i, ''),
    );
    const lookup = new Map();
    for (const entry of filesArray || []) {
      const rel = getArchiveEntryPath(entry).toLowerCase();
      if (rel) lookup.set(rel, entry);
    }
    const selected = [];
    const missing = [];
    for (const suffix of REQUIRED_SIGNATURE_SUFFIXES) {
      const entry = lookup.get(suffix);
      if (entry) selected.push({ entry, relativePath: suffix });
      else missing.push(suffix);
    }
    return { archive, selected, missing, topFolderName };
  }

  async function extractArchiveCustomFiles(archiveFile, preferredLanguage) {
    const mod = await getArchiveModule();
    const { Archive } = mod;
    Archive.init(getLibarchiveInitOptions());
    const archive = await Archive.open(archiveFile);
    const filesArray = await archive.getFilesArray();
    const topFolderName = inferArchiveTopFolderName(
      filesArray,
      String(archiveFile?.name || '').replace(/\.(zip|rar|7z)$/i, ''),
    );
    const lookup = new Map();
    for (const entry of filesArray || []) {
      const rel = getArchiveEntryPath(entry).toLowerCase();
      if (rel) lookup.set(rel, entry);
    }

    const languageSuffix = getCustomLanguageSuffix(lookup, preferredLanguage);
    const selected = [];
    const missing = [];

    for (const suffix of CUSTOM_REQUIRED_SUFFIXES) {
      const entry = lookup.get(suffix);
      if (entry) selected.push({ entry, relativePath: suffix });
      else missing.push(suffix);
    }
    if (!languageSuffix) {
      missing.push(CUSTOM_LANGUAGE_SUFFIXES[preferredLanguage]);
    } else {
      selected.push({ entry: lookup.get(languageSuffix), relativePath: languageSuffix });
    }

    return { archive, selected, missing, topFolderName };
  }

  async function parseBdspArchive(file) {
    const lang = getUiLang();
    const preferredLanguage = getPreferredLanguage();
    let customParseError = null;
    showGlobalLoading(
      lang === 'fr' ? 'Analyse archive BDSP / Lumi' : 'Analyzing BDSP / Lumi archive',
      lang === 'fr'
        ? `Ouverture de ${file?.name || 'l’archive'}…`
        : `Opening ${file?.name || 'archive'}…`
    );
    await waitForLoadingFrame();
    setGlobalLoadingProgress(10, lang === 'fr' ? 'Lecture de l’archive…' : 'Reading archive…');
    await waitForLoadingFrame();

    let customArchive;
    try {
      customArchive = await extractArchiveCustomFiles(file, preferredLanguage);
      if (!customArchive.missing.length) {
        const buffers = [];
        try {
          for (let index = 0; index < customArchive.selected.length; index += 1) {
            const item = customArchive.selected[index];
            const progress = 16 + Math.round(((index + 1) / customArchive.selected.length) * 34);
            setGlobalLoadingProgress(
              progress,
              lang === 'fr'
                ? `Extraction bundle ${index + 1}/${customArchive.selected.length}…`
                : `Extracting bundle ${index + 1}/${customArchive.selected.length}…`
            );
            await waitForLoadingFrame();
            const extracted = await item.entry.file.extract();
            buffers.push({
              path: item.relativePath,
              buffer: await extracted.arrayBuffer(),
            });
          }

          setGlobalLoadingProgress(56, lang === 'fr' ? 'Parsing custom BDSP / Lumi…' : 'Parsing custom BDSP / Lumi…');
          await waitForLoadingFrame();
          const dataset = await parseCustomInWorker(buffers, {
            language: preferredLanguage,
            topFolderName: customArchive.topFolderName,
            sourceFile: file?.name || customArchive.topFolderName,
          });
          await applyCustomDataset(
            dataset,
            file?.name || customArchive.topFolderName,
            lang === 'fr'
              ? `✅ Archive custom analysée : ${dataset?.meta?.title || file?.name || customArchive.topFolderName}`
              : `✅ Custom archive parsed: ${dataset?.meta?.title || file?.name || customArchive.topFolderName}`
          );
          return;
        } finally {
          if (customArchive.archive && typeof customArchive.archive.close === 'function') {
            try { await customArchive.archive.close(); } catch (e) {}
          }
        }
      }
    } catch (customError) {
      customParseError = customError;
      console.warn('BDSP custom archive parser failed, falling back to signature match.', customError);
      if (customArchive?.archive && typeof customArchive.archive.close === 'function') {
        try { await customArchive.archive.close(); } catch (e) {}
      }
    }

    const { archive, selected, missing, topFolderName } = await extractArchiveSignatureFiles(file);
    try {
      if (missing.length) {
        throw new Error(
          lang === 'fr'
            ? `Archive incomplète : fichiers AssetAssistant manquants (${missing.length})`
            : `Incomplete archive: missing AssetAssistant files (${missing.length})`
        );
      }

      const hashes = [];
      for (let index = 0; index < selected.length; index += 1) {
        const item = selected[index];
        const progress = 22 + Math.round(((index + 1) / selected.length) * 38);
        setGlobalLoadingProgress(
          progress,
          lang === 'fr'
            ? `Extraction fichier ${index + 1}/${selected.length}…`
            : `Extracting file ${index + 1}/${selected.length}…`
        );
        await waitForLoadingFrame();
        const extracted = await item.entry.file.extract();
        hashes.push(await sha256HexFromArrayBuffer(await extracted.arrayBuffer()));
      }

      const match = await classifyBySignature(hashes, topFolderName);
      if (!match) {
        if (customParseError) {
          throw new Error(
            lang === 'fr'
              ? `L’archive BDSP / Lumi a bien été détectée, mais le parseur custom a échoué : ${String(customParseError?.message || customParseError)}`
              : `The BDSP / Lumi archive was detected, but the custom parser failed: ${String(customParseError?.message || customParseError)}`
          );
        }
        throw new Error(
          lang === 'fr'
            ? 'Archive BDSP/Lumi non reconnue. Vérifie qu’elle contient bien les bundles Unity AssetAssistant attendus.'
            : 'Unrecognized BDSP/Lumi archive. Make sure it contains the expected Unity AssetAssistant bundles.'
        );
      }

      await loadMatchedDataset(match.slug, topFolderName, match.profile);
    } finally {
      if (archive && typeof archive.close === 'function') {
        try { await archive.close(); } catch (e) {}
      }
    }
  }

  function bindBdspFolderInput() {
    const input = document.getElementById('bdsp-folder-input');
    if (!input || input.dataset.bound === '1') return;
    input.dataset.bound = '1';
    input.addEventListener('change', async (event) => {
      const files = event.target.files;
      if (!files || !files.length) return;
      try {
        await parseBdspFolder(files);
      } catch (error) {
        showToast(`❌ ${String(error?.message || error || 'Erreur dossier BDSP/Lumi')}`);
      } finally {
        hideGlobalLoading();
        event.target.value = '';
      }
    });
  }

  function bindBdspArchiveInput() {
    const input = document.getElementById('bdsp-archive-input');
    if (!input || input.dataset.bound === '1') return;
    input.dataset.bound = '1';
    input.addEventListener('change', async (event) => {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      try {
        await parseBdspArchive(file);
      } catch (error) {
        showToast(`❌ ${String(error?.message || error || 'Erreur archive BDSP/Lumi')}`);
      } finally {
        hideGlobalLoading();
        event.target.value = '';
      }
    });
  }

  bindBdspFolderInput();
  bindBdspArchiveInput();
  window.bindBdspFolderInput = bindBdspFolderInput;
  window.bindBdspArchiveInput = bindBdspArchiveInput;
  window.__parseBdspFolder = parseBdspFolder;
  window.__parseBdspArchive = parseBdspArchive;
})();
