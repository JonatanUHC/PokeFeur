(function () {
  const CURRENT_SCRIPT_BASE_URL = (() => {
    try {
      if (document.currentScript?.src) {
        return new URL('.', document.currentScript.src);
      }
      const matchingScript = Array.from(document.scripts || []).find(script => /sv-folder-bridge\.js(?:\?|$)/i.test(script?.src || ''));
      if (matchingScript?.src) {
        return new URL('.', matchingScript.src);
      }
    } catch (error) {}
    return new URL('./assets/js/', window.location.href);
  })();

  function resolveBridgeUrl(relativePath) {
    return new URL(relativePath, CURRENT_SCRIPT_BASE_URL).href;
  }

  const TITLE_IDS = {
    scarlet: '0100A3D008C5C000',
    violet: '01008F6008C5E000',
  };

  const GAME_TITLES = {
    scarlet: { fr: 'Pokemon Scarlet', en: 'Pokemon Scarlet' },
    violet: { fr: 'Pokemon Violet', en: 'Pokemon Violet' },
  };
  const GENERIC_SV_TITLE = {
    fr: 'Pokemon Écarlate / Violet',
    en: 'Pokemon Scarlet / Violet',
  };

  const SV_AREA_LABELS = {
    1: { fr: 'Zone Sud n° 1', en: 'South Province (Area One)' },
    2: { fr: 'Mesaledo', en: 'Mesagoza' },
    3: { fr: 'Ligue Pokemon', en: 'Pokemon League' },
    4: { fr: 'Zone Sud n° 2', en: 'South Province (Area Two)' },
    5: { fr: 'Zone Sud n° 4', en: 'South Province (Area Four)' },
    6: { fr: 'Zone Sud n° 6', en: 'South Province (Area Six)' },
    7: { fr: 'Zone Sud n° 5', en: 'South Province (Area Five)' },
    8: { fr: 'Zone Sud n° 3', en: 'South Province (Area Three)' },
    9: { fr: 'Zone Ouest n° 1', en: 'West Province (Area One)' },
    10: { fr: 'Desert Rotissable', en: 'Asado Desert' },
    11: { fr: 'Zone Ouest n° 2', en: 'West Province (Area Two)' },
    12: { fr: 'Zone Ouest n° 3', en: 'West Province (Area Three)' },
    13: { fr: 'Bosquet Tague', en: 'Tagtree Thicket' },
    14: { fr: 'Zone Est n° 3', en: 'East Province (Area Three)' },
    15: { fr: 'Zone Est n° 1', en: 'East Province (Area One)' },
    16: { fr: 'Zone Est n° 2', en: 'East Province (Area Two)' },
    17: { fr: 'Mont Nappe (1)', en: 'Glaseado Mountain (1)' },
    18: { fr: 'Lac Asrol', en: 'Casseroya Lake' },
    19: { fr: 'Mont Nappe (2)', en: 'Glaseado Mountain (2)' },
    20: { fr: 'Zone Nord n° 3', en: 'North Province (Area Three)' },
    21: { fr: 'Zone Nord n° 1', en: 'North Province (Area One)' },
    22: { fr: 'Zone Nord n° 2', en: 'North Province (Area Two)' },
    23: { fr: 'Cratere de Paldea', en: 'Great Crater of Paldea' },
    24: { fr: 'Mer du Sud de Paldea', en: 'South Paldean Sea' },
    25: { fr: "Mer de l'Ouest de Paldea", en: 'West Paldean Sea' },
    26: { fr: "Mer de l'Est de Paldea", en: 'East Paldean Sea' },
    27: { fr: 'Mer du Nord de Paldea', en: 'North Paldean Sea' },
  };

  const ABILITY_SLOT_LABELS = {
    fr: {
      0: 'Talents possibles',
      1: 'Talent 1',
      2: 'Talent 2',
      3: 'Talent caché',
    },
    en: {
      0: 'Possible abilities',
      1: 'Ability 1',
      2: 'Ability 2',
      3: 'Hidden ability',
    },
  };

  const TRAINER_TYPE_NAMES = {
    artist: { fr: 'Artiste', en: 'Artist' },
    backpacker: { fr: 'Randonneur', en: 'Backpacker' },
    businessman: { fr: "Homme d'affaires", en: 'Businessman' },
    chef: { fr: 'Chef', en: 'Chef' },
    cleaning: { fr: "Agent d'entretien", en: 'Cleaning Staff' },
    clavel_01: { fr: 'Proviseur', en: 'Director' },
    clavel_02: { fr: 'Proviseur', en: 'Director' },
    deliverer: { fr: 'Livreur', en: 'Courier' },
    dragontamer: { fr: 'Dompteur Dragon', en: 'Dragon Tamer' },
    friend_01: { fr: 'Ami', en: 'Friend' },
    friend_02: { fr: 'Ami', en: 'Friend' },
    gym_f: { fr: "Dresseuse d'Arène", en: 'Gym Trainer' },
    gym_m: { fr: "Dresseur d'Arène", en: 'Gym Trainer' },
    karate: { fr: 'Karatéka', en: 'Black Belt' },
    mania: { fr: 'Maniaque', en: 'Pokemaniac' },
    model: { fr: 'Mannequin', en: 'Model' },
    mountain: { fr: 'Montagnard', en: 'Hiker' },
    musician: { fr: 'Musicien', en: 'Musician' },
    ol: { fr: 'Ouvrier', en: 'Worker' },
    researcher: { fr: 'Chercheur', en: 'Researcher' },
    rival_01: { fr: 'Rivale', en: 'Rival' },
    rival_02: { fr: 'Rivale', en: 'Rival' },
    sch_boy: { fr: 'Écolier', en: 'Schoolboy' },
    sch_child_f: { fr: 'Jeune élève', en: 'Young Student' },
    sch_child_m: { fr: 'Jeune élève', en: 'Young Student' },
    sch_girl: { fr: 'Écolière', en: 'Schoolgirl' },
    sch_infant_f: { fr: 'Petite élève', en: 'Preschool Girl' },
    sch_infant_m: { fr: 'Petit élève', en: 'Preschool Boy' },
    sch_middle_f: { fr: 'Collégienne', en: 'Student' },
    sch_middle_m: { fr: 'Collégien', en: 'Student' },
    sch_senior_f: { fr: 'Lycéenne', en: 'Student' },
    sch_senior_m: { fr: 'Lycéen', en: 'Student' },
    sch_young_f: { fr: 'Écolière', en: 'Schoolgirl' },
    sch_young_m: { fr: 'Écolier', en: 'Schoolboy' },
    tanpan: { fr: 'Gamin', en: 'Youngster' },
    taxidriver: { fr: 'Chauffeur', en: 'Taxi Driver' },
    top_champion: { fr: 'Maître', en: 'Champion' },
    waiter: { fr: 'Serveur', en: 'Waiter' },
    waitress: { fr: 'Serveuse', en: 'Waitress' },
    worker: { fr: 'Ouvrier', en: 'Worker' },
    youthm: { fr: 'Jeune homme', en: 'Young Man' },
  };

  const SPECIAL_TRAINER_NAMES_EN = {
    TRNAME_NEMO: 'Nemona',
    TRNAME_PEPAA: 'Arven',
    TRNAME_BOTAN: 'Penny',
    TRNAME_OMODAKA: 'Geeta',
    TRNAME_KURABERU: 'Clavell',
    TRNAME_AOKI: 'Larry',
    TRNAME_NANJAMO: 'Iono',
    TRNAME_RIPPU: 'Tulip',
    TRNAME_RAIMU: 'Ryme',
    TRNAME_GURUUSYA: 'Grusha',
    TRNAME_KORUSA: 'Brassius',
    TRNAME_HAIDAI: 'Kofu',
    TRNAME_KAEDE: 'Katy',
    TRNAME_KIHADA: 'Dendra',
    TRNAME_HASSAKU: 'Hassel',
    TRNAME_PIINYA: 'Giacomo',
    TRNAME_SYUUMEI: 'Atticus',
    TRNAME_MEROKO: 'Mela',
    TRNAME_ORUTHIGA: 'Ortega',
    TRNAME_BIWA: 'Eri',
    TRNAME_TIRI: 'Rika',
    TRNAME_POPII: 'Poppy',
    TRNAME_STAR_F: 'Team Star Grunt',
    TRNAME_STAR_M: 'Team Star Grunt',
    TRNAME_HAKASE_A: 'Professor Sada',
    TRNAME_HAKASE_B: 'Professor Turo',
  };

  const SPECIAL_TRAINER_NAMES_FR = {
    TRNAME_NEMO: 'Menzi',
    TRNAME_PEPAA: 'Pepper',
    TRNAME_BOTAN: 'Pania',
    TRNAME_OMODAKA: 'Alisma',
    TRNAME_KURABERU: 'Clavel',
    TRNAME_NANJAMO: 'Mashynn',
    TRNAME_STAR_F: 'Sbire de la Team Star',
    TRNAME_STAR_M: 'Sbire de la Team Star',
  };

  const CUSTOM_REQUIRED_GROUPS = [
    ['Randomizer/Trainers/trdata_array_clean.json', 'Randomizer/Trainers/trdata_array.json'],
    ['Randomizer/PersonalData/personal_array_clean.json', 'Randomizer/PersonalData/personal_array.json'],
    ['Randomizer/Trainers/pokemon_to_id.txt', 'Randomizer/PersonalData/pokemon_to_id.txt'],
  ];

  const DUMP_SIGNATURE_SUFFIXES = [
    'romfs/arc/data.trpfd',
    'romfs/arc/data.trpfs',
  ];

  const LOOSE_BINARY_GROUPS = {
    trainers: [
      'romfs/world/data/trainer/trdata/trdata_array.bin',
      'world/data/trainer/trdata/trdata_array.bin',
      'trdata_array.bin',
    ],
    personal: [
      'romfs/avalon/data/personal_array.bin',
      'avalon/data/personal_array.bin',
      'romfs/world/data/personal/personal_array.bin',
      'world/data/personal/personal_array.bin',
      'personal_array.bin',
    ],
  };

  let archiveGlobalPromise = null;
  let archiveModulePromise = null;
  let supportScriptPromise = null;
  let binaryParserModulePromise = null;

  function getUiLang() {
    return document.body.classList.contains('lang-en') ? 'en' : 'fr';
  }

  function getPreferredLanguage() {
    return getUiLang() === 'en' ? 'en' : 'fr';
  }

  function stripDiacritics(value) {
    return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function normalizePath(rawPath) {
    return String(rawPath || '').replace(/\\/g, '/').replace(/^\/+/, '').trim();
  }

  function toInt(value, fallback = 0) {
    const parsed = Number.parseInt(value, 10);
    return Number.isFinite(parsed) ? parsed : fallback;
  }

  function prettyToken(value) {
    const token = String(value || '').replace(/[_\s]+/g, ' ').trim();
    if (!token) return '';
    return token.split(' ').map(part => {
      if (/^\d+$/.test(part)) return part;
      if (part.length <= 3 && part === part.toUpperCase()) return part;
      return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
    }).join(' ');
  }

  function trainerTypeName(trainerType, lang) {
    const key = String(trainerType || '').trim().toLowerCase();
    if (TRAINER_TYPE_NAMES[key]?.[lang]) return TRAINER_TYPE_NAMES[key][lang];
    return prettyToken(key);
  }

  function svAreaLabel(areaNo, lang) {
    return SV_AREA_LABELS[toInt(areaNo, 0)]?.[lang]
      || `A${String(toInt(areaNo, 0)).padStart(2, '0')}`;
  }

  function extractAreaTrainerMeta(label, trid) {
    const labelValue = String(label || '').trim();
    const tridValue = String(trid || '').trim();
    let match = labelValue.match(/^TRNAME_AREA(\d+)_TRAINER_(.+?)(?:_(\d+))?$/i);
    if (match) {
      return {
        areaNo: toInt(match[1], 0),
        areaType: String(match[2] || '').toLowerCase(),
        duplicateIndex: match[3] ? toInt(match[3], 0) + 1 : 1,
      };
    }
    match = tridValue.match(/^area(\d+)_trainer_(.+?)(?:_(\d+))?$/i);
    if (match) {
      return {
        areaNo: toInt(match[1], 0),
        areaType: String(match[2] || '').toLowerCase(),
        duplicateIndex: match[3] ? toInt(match[3], 0) + 1 : 1,
      };
    }
    return null;
  }

  function resolveTrainerName(label, trainerType, trid, lang, trainerIndex) {
    const clean = String(label || '').trim();
    if (lang === 'en' && SPECIAL_TRAINER_NAMES_EN[clean]) return SPECIAL_TRAINER_NAMES_EN[clean];
    if (lang === 'fr' && SPECIAL_TRAINER_NAMES_FR[clean]) return SPECIAL_TRAINER_NAMES_FR[clean];
    const areaMeta = extractAreaTrainerMeta(clean, trid);
    if (areaMeta?.areaNo) {
      const base = trainerTypeName(areaMeta.areaType || trainerType, lang);
      const areaToken = svAreaLabel(areaMeta.areaNo, lang);
      const duplicateSuffix = areaMeta.duplicateIndex > 1
        ? (lang === 'fr' ? ` #${areaMeta.duplicateIndex}` : ` #${areaMeta.duplicateIndex}`)
        : '';
      return `${base} · ${areaToken}${duplicateSuffix}`;
    }
    if (/^TRNAME_RAID_ASSIST_/i.test(clean)) {
      const number = clean.split('_').pop();
      return `${lang === 'fr' ? 'Assistant Tera Raid' : 'Raid Partner'} ${number}`;
    }
    if (/^TRNAME_/i.test(clean)) {
      return prettyToken(clean.replace(/^TRNAME_/i, ''));
    }
    const fallback = trainerTypeName(trainerType, lang);
    if (fallback) return `${fallback} [${trainerIndex}]`;
    return `${lang === 'fr' ? 'Dresseur' : 'Trainer'} ${trainerIndex}`;
  }

  function battleTypeValue(raw) {
    const key = String(raw || '').trim();
    if (key === '_2vs1' || key === '_1vs2') return 1;
    if (key === '_2vs2') return 2;
    return 0;
  }

  function sexLabel(raw) {
    const value = String(raw || '').trim().toUpperCase();
    if (value === 'MALE') return 'Male';
    if (value === 'FEMALE') return 'Female';
    return 'Random';
  }

  function normalizeStatsBlock(block, speedKey = 'agi') {
    const src = block || {};
    return {
      hp: toInt(src.hp ?? src.HP, 0),
      atk: toInt(src.atk ?? src.ATK, 0),
      def: toInt(src.def ?? src.DEF, 0),
      spAtk: toInt(src.spAtk ?? src.spa ?? src.SPA, 0),
      spDef: toInt(src.spDef ?? src.spd ?? src.SPD, 0),
      spd: toInt(src[speedKey] ?? src.spe ?? src.SPE, 0),
    };
  }

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
          throw new Error(getUiLang() === 'fr' ? 'Le module libarchive est introuvable.' : 'The libarchive module could not be loaded.');
        }
        return window.LibArchiveGlobal;
      })().catch(error => {
        archiveGlobalPromise = null;
        throw error;
      });
    }
    return archiveGlobalPromise;
  }

  async function getArchiveModule() {
    if (window.LibArchiveGlobal?.Archive) return window.LibArchiveGlobal;
    if (!archiveModulePromise) {
      archiveModulePromise = loadArchiveGlobalScript().catch(error => {
        archiveModulePromise = null;
        throw error;
      });
    }
    return archiveModulePromise;
  }

  async function ensureSvSupportLoaded() {
    if (window.SV_BROWSER_SUPPORT_DATA?.moveTokenMap) {
      return window.SV_BROWSER_SUPPORT_DATA;
    }
    if (!supportScriptPromise) {
      supportScriptPromise = new Promise((resolve, reject) => {
        const existing = document.querySelector('script[data-sv-browser-support="1"]');
        if (existing) {
          existing.addEventListener('load', () => resolve(window.SV_BROWSER_SUPPORT_DATA), { once: true });
          existing.addEventListener('error', reject, { once: true });
          return;
        }
        const script = document.createElement('script');
        script.src = resolveBridgeUrl('./sv-browser-support.js');
        script.dataset.svBrowserSupport = '1';
        script.onload = () => resolve(window.SV_BROWSER_SUPPORT_DATA);
        script.onerror = reject;
        document.head.appendChild(script);
      }).catch(error => {
        supportScriptPromise = null;
        throw error;
      });
    }
    return supportScriptPromise;
  }

  async function ensureSvBinaryParserLoaded() {
    if (window.SVBinParserBrowser?.parseTrainersBinary) {
      return window.SVBinParserBrowser;
    }
    if (!binaryParserModulePromise) {
      binaryParserModulePromise = new Promise((resolve, reject) => {
        const existing = document.querySelector('script[data-sv-bin-parser="1"]');
        if (existing) {
          if (window.SVBinParserBrowser?.parseTrainersBinary) {
            resolve(window.SVBinParserBrowser);
            return;
          }
          existing.addEventListener('load', () => resolve(window.SVBinParserBrowser), { once: true });
          existing.addEventListener('error', reject, { once: true });
          return;
        }
        const script = document.createElement('script');
        script.src = resolveBridgeUrl('./parsers/sv-bin-parser.browser.js');
        script.dataset.svBinParser = '1';
        script.onload = () => {
          if (window.SVBinParserBrowser?.parseTrainersBinary) resolve(window.SVBinParserBrowser);
          else reject(new Error(getUiLang() === 'fr' ? 'Le parseur binaire SV est introuvable.' : 'The SV binary parser could not be loaded.'));
        };
        script.onerror = reject;
        document.head.appendChild(script);
      }).catch(error => {
        binaryParserModulePromise = null;
        throw error;
      });
    }
    return binaryParserModulePromise;
  }

  function getTopFolderName(files) {
    const first = Array.from(files || []).find(file => file.webkitRelativePath);
    if (!first) return '';
    const normalized = normalizePath(first.webkitRelativePath);
    return normalized.split('/')[0] || '';
  }

  function findFirstSuffixMatch(lookup, candidates) {
    const normalizedCandidates = (Array.isArray(candidates) ? candidates : [candidates])
      .map(candidate => normalizePath(candidate).toLowerCase())
      .filter(Boolean);
    if (!normalizedCandidates.length) return null;
    for (const [relativePath, entry] of lookup.entries()) {
      if (normalizedCandidates.some(candidate => relativePath === candidate || relativePath.endsWith(`/${candidate}`))) {
        return { relativePath, entry };
      }
    }
    return null;
  }

  function hasSuffixMatch(lookup, candidate) {
    return Boolean(findFirstSuffixMatch(lookup, candidate));
  }

  function getMappedValueBySuffix(map, candidates) {
    const normalizedCandidates = (Array.isArray(candidates) ? candidates : [candidates])
      .map(candidate => normalizePath(candidate).toLowerCase())
      .filter(Boolean);
    if (!normalizedCandidates.length) return null;
    for (const [key, value] of map.entries()) {
      if (normalizedCandidates.some(candidate => key === candidate || key.endsWith(`/${candidate}`))) {
        return value;
      }
    }
    return null;
  }

  function guessSvGameFromName(name) {
    const lower = stripDiacritics(String(name || '').toLowerCase());
    if (/\becarlate\b|\bscarlet\b/.test(lower)) return 'scarlet';
    if (/\bviolet\b/.test(lower)) return 'violet';
    return '';
  }

  function inferCurrentSvGame() {
    try {
      if (typeof vanillaMenuGame !== 'undefined' && (vanillaMenuGame === 'scarlet' || vanillaMenuGame === 'violet')) {
        return vanillaMenuGame;
      }
    } catch (error) {}
    try {
      const currentName = stripDiacritics(String(detectedVersionInfo?.name || detectedVersionInfo?.key || '').toLowerCase());
      if (/\becarlate\b|\bscarlet\b/.test(currentName)) return 'scarlet';
      if (/\bviolet\b/.test(currentName)) return 'violet';
    } catch (error) {}
    return '';
  }

  function resolveSvGameHint(...values) {
    for (const value of values) {
      const guessed = guessSvGameFromName(value);
      if (guessed) return guessed;
    }
    return inferCurrentSvGame() || '';
  }

  function getSlugForGame(game, lang) {
    const uiLang = lang === 'en' ? 'en' : 'fr';
    return `pokemon_${game}_global_${uiLang}`;
  }

  function getArchiveRawEntryPath(entry) {
    const folder = String(entry?.path || '').replace(/\\/g, '/');
    const name = String(entry?.file?.name || '');
    return `${folder}${name}`.replace(/\\/g, '/').replace(/^\/+/, '');
  }

  function inferArchiveTopFolderName(entries, fallbackName = '') {
    const counts = new Map();
    for (const entry of entries || []) {
      const raw = normalizePath(getArchiveRawEntryPath(entry));
      if (!raw) continue;
      const parts = raw.split('/').filter(Boolean);
      if (parts.length > 1) {
        counts.set(parts[0], (counts.get(parts[0]) || 0) + 1);
      }
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

  function findCustomFolderFiles(fileList) {
    const entries = Array.from(fileList || []).map(file => ({
      file,
      relativePath: normalizePath(file.webkitRelativePath || file.name),
    }));
    const lookup = new Map(entries.map(entry => [entry.relativePath.toLowerCase(), entry]));
    const selected = [];
    const missing = [];
    for (const group of CUSTOM_REQUIRED_GROUPS) {
      const found = findFirstSuffixMatch(lookup, group);
      if (found?.entry) selected.push({ file: found.entry.file, relativePath: found.relativePath });
      else missing.push(group[0]);
    }
    return { selected, missing };
  }

  function findDumpFolderFiles(fileList) {
    const entries = Array.from(fileList || []).map(file => ({
      file,
      relativePath: normalizePath(file.webkitRelativePath || file.name),
    }));
    const lookup = new Map(entries.map(entry => [entry.relativePath.toLowerCase(), entry]));
    const missing = DUMP_SIGNATURE_SUFFIXES.filter(suffix => !hasSuffixMatch(lookup, suffix));
    return { missing };
  }

  function findLooseBinaryFolderFiles(fileList) {
    const entries = Array.from(fileList || []).map(file => ({
      file,
      relativePath: normalizePath(file.webkitRelativePath || file.name),
    }));
    const lookup = new Map(entries.map(entry => [entry.relativePath.toLowerCase(), entry]));
    const trainerMatch = findFirstSuffixMatch(lookup, LOOSE_BINARY_GROUPS.trainers);
    const personalMatch = findFirstSuffixMatch(lookup, LOOSE_BINARY_GROUPS.personal);
    return {
      trainer: trainerMatch ? { file: trainerMatch.entry.file, relativePath: trainerMatch.relativePath } : null,
      personal: personalMatch ? { file: personalMatch.entry.file, relativePath: personalMatch.relativePath } : null,
    };
  }

  async function extractArchiveCustomFiles(file) {
    const mod = await getArchiveModule();
    const { Archive } = mod;
    Archive.init(getLibarchiveInitOptions());
    const archive = await Archive.open(file);
    const filesArray = await archive.getFilesArray();
    const topFolderName = inferArchiveTopFolderName(filesArray, String(file?.name || '').replace(/\.(zip|rar|7z)$/i, ''));
    const lookup = new Map();
    for (const entry of filesArray || []) {
      const rel = normalizePath(getArchiveRawEntryPath(entry)).toLowerCase();
      if (rel) lookup.set(rel, entry);
    }
    const selected = [];
    const missing = [];
    for (const group of CUSTOM_REQUIRED_GROUPS) {
      const found = findFirstSuffixMatch(lookup, group);
      if (!found?.entry) missing.push(group[0]);
      else selected.push({ entry: found.entry, relativePath: found.relativePath });
    }
    return { archive, selected, missing, topFolderName };
  }

  async function extractArchiveLooseBinaryFiles(file) {
    const mod = await getArchiveModule();
    const { Archive } = mod;
    Archive.init(getLibarchiveInitOptions());
    const archive = await Archive.open(file);
    const filesArray = await archive.getFilesArray();
    const topFolderName = inferArchiveTopFolderName(filesArray, String(file?.name || '').replace(/\.(zip|rar|7z)$/i, ''));
    const lookup = new Map();
    for (const entry of filesArray || []) {
      const rel = normalizePath(getArchiveRawEntryPath(entry)).toLowerCase();
      if (rel) lookup.set(rel, entry);
    }
    const trainerMatch = findFirstSuffixMatch(lookup, LOOSE_BINARY_GROUPS.trainers);
    const personalMatch = findFirstSuffixMatch(lookup, LOOSE_BINARY_GROUPS.personal);
    return {
      archive,
      topFolderName,
      trainer: trainerMatch ? { entry: trainerMatch.entry, relativePath: trainerMatch.relativePath } : null,
      personal: personalMatch ? { entry: personalMatch.entry, relativePath: personalMatch.relativePath } : null,
    };
  }

  function resolveLocalizedName(entryMap, id, fallbackMap, hardFallback = '') {
    if (!id) return '';
    return entryMap?.[String(id)]?.[getUiLang() === 'fr' ? 'nameFr' : 'nameEn']
      || fallbackMap?.[String(id)]?.[getUiLang() === 'fr' ? 'nameFr' : 'nameEn']
      || fallbackMap?.[String(id)]?.nameEn
      || hardFallback
      || '';
  }

  function resolveMoveEntry(moveId, support, lang) {
    const moveEntry = support.moveEntries?.[String(moveId)] || support.moveEntries?.[moveId];
    const typeId = toInt(moveEntry?.typeId, 0);
    return {
      id: moveId,
      name: resolveLocalizedName(support.moveEntries, moveId, support.moveEntries, `${lang === 'fr' ? 'Attaque' : 'Move'} ${moveId}`),
      typeId,
      type: support.typeLabels?.[lang]?.[String(typeId)] || support.typeLabels?.[lang]?.[typeId] || (lang === 'fr' ? 'Normal' : 'Normal'),
      damageClass: String(moveEntry?.damageClass || 'status'),
      power: toInt(moveEntry?.power, 0),
      pp: toInt(moveEntry?.pp, 0),
      accuracy: toInt(moveEntry?.accuracy, 101),
      accuracyKnown: Boolean(moveEntry?.accuracyKnown ?? moveEntry?.accuracy),
    };
  }

  function deriveLearnsetMoves(personal, level) {
    const learned = [];
    for (const row of Array.isArray(personal?.levelup_moves) ? personal.levelup_moves : []) {
      const moveId = toInt(row?.move, 0);
      const learnLevel = toInt(row?.level, 0);
      if (!moveId || learnLevel > level) continue;
      const existingIndex = learned.indexOf(moveId);
      if (existingIndex >= 0) learned.splice(existingIndex, 1);
      learned.push(moveId);
    }
    return learned.slice(-4);
  }

  function resolveAbilitySelection(token, personal, lang, support) {
    const abilityIds = [];
    [personal?.ability_1, personal?.ability_2, personal?.ability_3].forEach(value => {
      const id = toInt(value, 0);
      if (id > 0 && !abilityIds.includes(id)) abilityIds.push(id);
    });
    const abilityNames = abilityIds.map(id => resolveLocalizedName(support.abilityEntries, id, support.abilityEntries, `${lang === 'fr' ? 'Talent' : 'Ability'} ${id}`));
    const normalized = String(token || '').trim().toUpperCase();
    if (normalized === 'SET_1') {
      return { abilityChoice: 1, abilityLabel: lang === 'fr' ? 'Talent 1' : 'Ability 1', abilityIds: abilityIds.slice(0, 1), abilities: abilityNames.slice(0, 1) };
    }
    if (normalized === 'SET_2') {
      return {
        abilityChoice: abilityIds.length > 1 ? 2 : 1,
        abilityLabel: abilityIds.length > 1 ? ABILITY_SLOT_LABELS[lang][2] : (lang === 'fr' ? 'Talent' : 'Ability'),
        abilityIds: abilityIds.slice(1, 2).length ? abilityIds.slice(1, 2) : abilityIds.slice(0, 1),
        abilities: abilityNames.slice(1, 2).length ? abilityNames.slice(1, 2) : abilityNames.slice(0, 1),
      };
    }
    if (normalized === 'SET_3') {
      return {
        abilityChoice: abilityIds.length > 2 ? 3 : 1,
        abilityLabel: abilityIds.length > 2 ? ABILITY_SLOT_LABELS[lang][3] : (lang === 'fr' ? 'Talent' : 'Ability'),
        abilityIds: abilityIds.slice(2, 3).length ? abilityIds.slice(2, 3) : abilityIds.slice(0, 1),
        abilities: abilityNames.slice(2, 3).length ? abilityNames.slice(2, 3) : abilityNames.slice(0, 1),
      };
    }
    if (abilityIds.length <= 1) {
      return { abilityChoice: 0, abilityLabel: lang === 'fr' ? 'Talent' : 'Ability', abilityIds: abilityIds.slice(0, 1), abilities: abilityNames.slice(0, 1) };
    }
    return { abilityChoice: 0, abilityLabel: ABILITY_SLOT_LABELS[lang][0], abilityIds: abilityIds.slice(0, 2), abilities: abilityNames.slice(0, 2) };
  }

  function typeBundle(personal, support, lang) {
    const type1 = toInt(personal?.type_1, 0);
    const type2 = toInt(personal?.type_2, type1);
    const ids = type1 === type2 ? [type1] : [type1, type2];
    const names = ids.map(id => support.typeLabels?.[lang]?.[String(id)] || support.typeLabels?.[lang]?.[id] || (lang === 'fr' ? 'Normal' : 'Normal'));
    return { typeIds: ids, types: names };
  }

  function normalizePartyMon(mon, lang, support, personalByPair, devToSpecies) {
    const devId = String(mon?.devId || '').trim();
    if (!devId || devId === 'DEV_NULL') return null;
    const speciesId = toInt(devToSpecies.get(devId), 0);
    const formId = toInt(mon?.formId, 0);
    const personal = personalByPair.get(`${speciesId}:${formId}`) || personalByPair.get(`${speciesId}:0`);
    if (!personal) return null;

    const level = toInt(mon?.level, 1);
    const { typeIds, types } = typeBundle(personal, support, lang);
    const species = resolveLocalizedName(support.speciesEntries, speciesId, support.speciesEntries, `${lang === 'fr' ? 'Pokémon' : 'Pokemon'} ${speciesId}`);
    const explicitMoveTokens = [];
    for (let slot = 1; slot <= 4; slot += 1) {
      const moveToken = String(mon?.[`waza${slot}`]?.wazaId || '').trim();
      if (moveToken && moveToken !== 'WAZA_NULL') explicitMoveTokens.push(moveToken);
    }
    let movesetIds = explicitMoveTokens.map(token => toInt(support.moveTokenMap?.[token], 0)).filter(Boolean);
    let movesSource = 'explicit';
    if (!movesetIds.length) {
      movesetIds = deriveLearnsetMoves(personal, level);
      movesSource = 'learnset';
    }
    const moveDetails = movesetIds.map(moveId => resolveMoveEntry(moveId, support, lang));

    const heldItemToken = String(mon?.item || '').trim();
    const heldItemId = toInt(support.itemTokenMap?.[heldItemToken], 0);
    const natureToken = String(mon?.seikaku || '').trim();
    const natureId = toInt(support.natureTokenMap?.[natureToken], 0);
    const abilityInfo = resolveAbilitySelection(mon?.tokusei, personal, lang, support);

    return {
      speciesId,
      species,
      formId,
      level,
      sex: sexLabel(mon?.sex),
      heldItemId,
      heldItem: resolveLocalizedName(support.itemEntries, heldItemId, support.itemEntries, heldItemId ? `${lang === 'fr' ? 'Objet' : 'Item'} ${heldItemId}` : ''),
      natureId,
      nature: resolveLocalizedName(support.natureEntries, natureId, support.natureEntries, ''),
      movesetIds,
      moveset: moveDetails.map(entry => entry.name),
      moveDetails,
      movesSource,
      typeIds,
      types,
      abilityChoice: abilityInfo.abilityChoice,
      abilityLabel: abilityInfo.abilityLabel,
      abilities: abilityInfo.abilities,
      abilityIds: abilityInfo.abilityIds,
      baseStats: normalizeStatsBlock(personal?.base_stats, 'SPE'),
      ivs: normalizeStatsBlock(mon?.talentValue, 'agi'),
      evs: normalizeStatsBlock(mon?.effortValue, 'agi'),
      difficulty: 0,
      ball: 0,
      unknown: 0,
    };
  }

  function buildLookupPayload(datasetTrainers) {
    const speciesEntries = {};
    const moveEntries = {};
    const itemEntries = {};
    const abilityEntries = {};

    for (const trainer of datasetTrainers) {
      for (const mon of trainer.party || []) {
        if (mon.speciesId && !speciesEntries[mon.speciesId]) {
          speciesEntries[mon.speciesId] = {
            id: mon.speciesId,
            nameEn: mon.species,
            nameFr: mon.species,
          };
        }
        for (const move of mon.moveDetails || []) {
          if (move.id && !moveEntries[move.id]) moveEntries[move.id] = move;
        }
        if (mon.heldItemId && mon.heldItem && !itemEntries[mon.heldItemId]) {
          itemEntries[mon.heldItemId] = { id: mon.heldItemId, nameEn: mon.heldItem, nameFr: mon.heldItem };
        }
        (mon.abilityIds || []).forEach((id, index) => {
          if (id && mon.abilities?.[index] && !abilityEntries[id]) {
            abilityEntries[id] = { id, nameEn: mon.abilities[index], nameFr: mon.abilities[index] };
          }
        });
      }
    }

    return {
      speciesEntries: Object.values(speciesEntries),
      moveEntries: Object.values(moveEntries),
      itemEntries: Object.values(itemEntries),
      abilityEntries: Object.values(abilityEntries),
    };
  }

  async function parseSvCustomDataset(payload) {
    const lang = payload?.language === 'en' ? 'en' : 'fr';
    const support = await ensureSvSupportLoaded();
    const trainersJson = JSON.parse(String(payload?.trdataText || '{}'));
    const personalJson = JSON.parse(String(payload?.personalText || '{}'));
    const trainersRaw = Array.isArray(trainersJson?.values) ? trainersJson.values : (Array.isArray(trainersJson) ? trainersJson : []);
    const parsedPersonalEntries = Array.isArray(personalJson?.entry) ? personalJson.entry : (Array.isArray(personalJson) ? personalJson : []);
    const personalEntries = parsedPersonalEntries.length
      ? parsedPersonalEntries
      : Object.values(support.vanillaPersonal || {});
    const speciesLines = String(payload?.pokemonToIdText || '').split(/\r?\n/).map(line => line.trim());
    const devToSpecies = new Map();
    speciesLines.forEach((line, index) => {
      if (line) devToSpecies.set(line, index);
    });
    Object.entries(support.devNameToSpeciesId || {}).forEach(([devName, speciesId]) => {
      if (!devName || devToSpecies.has(devName)) return;
      const numericSpeciesId = toInt(speciesId, 0);
      if (numericSpeciesId > 0) devToSpecies.set(devName, numericSpeciesId);
    });

    const personalByPair = new Map();
    for (const entry of personalEntries) {
      const speciesId = toInt(entry?.species?.species, 0);
      const formId = toInt(entry?.species?.form, 0);
      personalByPair.set(`${speciesId}:${formId}`, entry);
    }

    const trainerClassIds = new Map();
    const trainers = [];
    for (let trainerIndex = 0; trainerIndex < trainersRaw.length; trainerIndex += 1) {
      const trainer = trainersRaw[trainerIndex];
      if (String(trainer?.trid || '').startsWith('00_test')) continue;
      const party = [];
      for (let slot = 1; slot <= 6; slot += 1) {
        const normalized = normalizePartyMon(trainer?.[`poke${slot}`], lang, support, personalByPair, devToSpecies);
        if (normalized) party.push(normalized);
      }
      if (!party.length) continue;
      const trainerType = String(trainer?.trainerType || '').trim().toLowerCase();
      if (trainerType && !trainerClassIds.has(trainerType)) {
        trainerClassIds.set(trainerType, trainerClassIds.size + 1);
      }
      const displayName = resolveTrainerName(trainer?.trNameLabel, trainerType, trainer?.trid, lang, trainerIndex);
      trainers.push({
        trainerId: trainerIndex,
        name: displayName,
        trainerClassId: trainerClassIds.get(trainerType) || 0,
        trainerClassName: trainerTypeName(trainerType, lang),
        fullDisplayName: displayName,
        battleType: battleTypeValue(trainer?.battleType),
        battleType2: 0,
        trainerItemIds: [],
        trainerItems: [],
        ai: toInt(trainer?.moneyRate, 0),
        party,
      });
    }

    const explicitGame = resolveSvGameHint(
      payload?.game,
      payload?.sourceName,
      payload?.topFolderName,
    );
    const game = explicitGame || 'scarlet';
    const title = explicitGame
      ? (GAME_TITLES[game]?.[lang] || (game === 'violet' ? 'Pokemon Violet' : 'Pokemon Scarlet'))
      : GENERIC_SV_TITLE[lang];
    const dataset = {
      meta: {
        sourceFile: payload?.sourceName || payload?.topFolderName || `SV-Randomizer trainer dump (${game}, ${lang})`,
        title,
        idCode: '',
        productCode: '',
        titleId: TITLE_IDS[game] || '',
        game,
        family: 'gen9',
        language: lang,
        regions: ['global'],
        trainerCount: trainers.length,
      },
      trainers,
    };
    Object.assign(dataset, buildLookupPayload(trainers));
    return dataset;
  }

  async function loadMatchedDataset(game, sourceName) {
    const lang = getPreferredLanguage();
    const slug = getSlugForGame(game, lang);
    const entry = (typeof getVanillaManifest === 'function' ? getVanillaManifest() : []).find(row => row.slug === slug);
    if (!entry) throw new Error(lang === 'fr' ? `Dataset Vanilla introuvable : ${slug}` : `Vanilla dataset not found: ${slug}`);
    setGlobalLoadingProgress(72, lang === 'fr' ? 'Chargement du dataset intégré…' : 'Loading built-in dataset…');
    await waitForLoadingFrame();
    const raw = await ensureVanillaScriptLoaded(slug);
    setGlobalLoadingProgress(88, lang === 'fr' ? 'Application des données…' : 'Applying dataset…');
    await waitForLoadingFrame();
    setLang((entry.language || 'fr') === 'en' ? 'en' : 'fr');
    vanillaMenuGame = entry.game || '';
    await applyJSONData(raw, sourceName || entry.sourceFile || entry.file || `${slug}.json`);
    renderVanillaOptionsMenu();
    showToast(getUiLang() === 'fr' ? `✅ ${entry.title} chargé` : `✅ ${entry.title} loaded`);
    const dd = document.getElementById('options-dropdown');
    if (dd) dd.classList.remove('open');
  }

  async function applyCustomDataset(dataset, sourceName) {
    setGlobalLoadingProgress(88, getUiLang() === 'fr' ? 'Application des données…' : 'Applying parsed data…');
    await waitForLoadingFrame();
    setLang((dataset?.meta?.language || 'fr') === 'en' ? 'en' : 'fr');
    vanillaMenuGame = dataset?.meta?.game || '';
    await applyJSONData(dataset, sourceName || dataset?.meta?.sourceFile || 'custom_sv');
    renderVanillaOptionsMenu();
    showToast(getUiLang() === 'fr'
      ? `✅ Dossier/archive custom analysé : ${dataset?.meta?.title || sourceName || 'SV'}`
      : `✅ Custom folder/archive parsed: ${dataset?.meta?.title || sourceName || 'SV'}`);
    const dd = document.getElementById('options-dropdown');
    if (dd) dd.classList.remove('open');
  }

  async function parseSvFolder(fileList) {
    const lang = getUiLang();
    const topFolderName = getTopFolderName(fileList);
    const customSelection = findCustomFolderFiles(fileList);
    const looseBinarySelection = findLooseBinaryFolderFiles(fileList);
    const dumpSelection = findDumpFolderFiles(fileList);

    showGlobalLoading(
      lang === 'fr' ? 'Analyse dossier Scarlet / Violet' : 'Analyzing Scarlet / Violet folder',
      lang === 'fr'
        ? `Reconnaissance de ${topFolderName || 'ton dossier'}…`
        : `Recognizing ${topFolderName || 'your folder'}…`
    );
    await waitForLoadingFrame();

    if (!customSelection.missing.length) {
      const map = new Map(customSelection.selected.map(entry => [entry.relativePath.toLowerCase(), entry.file]));
      setGlobalLoadingProgress(18, lang === 'fr' ? 'Lecture des exports Randomizer…' : 'Reading randomizer exports…');
      await waitForLoadingFrame();
      const dataset = await parseSvCustomDataset({
        language: getPreferredLanguage(),
        topFolderName,
        sourceName: topFolderName,
        game: resolveSvGameHint(topFolderName),
        trdataText: await getMappedValueBySuffix(map, [
          'randomizer/trainers/trdata_array_clean.json',
          'randomizer/trainers/trdata_array.json',
        ]).text(),
        personalText: await getMappedValueBySuffix(map, [
          'randomizer/personaldata/personal_array_clean.json',
          'randomizer/personaldata/personal_array.json',
        ]).text(),
        pokemonToIdText: await getMappedValueBySuffix(map, [
          'randomizer/trainers/pokemon_to_id.txt',
          'randomizer/personaldata/pokemon_to_id.txt',
        ]).text(),
      });
      await applyCustomDataset(dataset, topFolderName);
      return;
    }

    if (looseBinarySelection.trainer) {
      setGlobalLoadingProgress(22, lang === 'fr' ? 'Lecture des binaires trainer SV…' : 'Reading SV trainer binaries…');
      await waitForLoadingFrame();
      const parser = await ensureSvBinaryParserLoaded();
      const trainerJson = parser.parseTrainersBinary(await looseBinarySelection.trainer.file.arrayBuffer());
      const personalJson = looseBinarySelection.personal
        ? parser.parsePersonalBinary(await looseBinarySelection.personal.file.arrayBuffer())
        : { entry: [] };
      const dataset = await parseSvCustomDataset({
        language: getPreferredLanguage(),
        topFolderName,
        sourceName: topFolderName,
        game: resolveSvGameHint(topFolderName),
        trdataText: JSON.stringify(trainerJson),
        personalText: JSON.stringify(personalJson),
        pokemonToIdText: '',
      });
      await applyCustomDataset(dataset, topFolderName);
      return;
    }

    if (!dumpSelection.missing.length) {
      const game = resolveSvGameHint(topFolderName);
      if (!game) {
        await loadMatchedDataset('scarlet', topFolderName || 'Scarlet-Violet dump');
        showToast(lang === 'fr'
          ? 'ℹ️ Dossier romfs SV détecté. Pour lire le mod exact, charge un dossier contenant les exports Randomizer ou les binaires loose `trdata_array.bin`; ici le dataset Écarlate vanilla a été utilisé par défaut.'
          : 'ℹ️ SV romfs folder detected. To read the exact mod, load a folder containing Randomizer exports or loose `trdata_array.bin`; Scarlet vanilla data was used here by default.');
        return;
      }
      await loadMatchedDataset(game, topFolderName);
      return;
    }

    throw new Error(lang === 'fr'
      ? 'Dossier Scarlet/Violet non reconnu. Charge soit un dump contenant `romfs/arc/data.trpfd`, soit un dossier Randomizer, soit un mod contenant `trdata_array.bin`.'
      : 'Unrecognized Scarlet/Violet folder. Load either a dump with `romfs/arc/data.trpfd`, a Randomizer folder, or a mod containing `trdata_array.bin`.');
  }

  async function parseSvArchive(file) {
    const lang = getUiLang();
    showGlobalLoading(
      lang === 'fr' ? 'Analyse archive Scarlet / Violet' : 'Analyzing Scarlet / Violet archive',
      lang === 'fr' ? `Ouverture de ${file?.name || "l'archive"}…` : `Opening ${file?.name || 'archive'}…`
    );
    await waitForLoadingFrame();
    setGlobalLoadingProgress(10, lang === 'fr' ? 'Lecture de l’archive…' : 'Reading archive…');
    await waitForLoadingFrame();

    const { archive, selected, missing, topFolderName } = await extractArchiveCustomFiles(file);
    try {
      if (!missing.length) {
        const textMap = new Map();
        for (let index = 0; index < selected.length; index += 1) {
          const item = selected[index];
          const progress = 16 + Math.round(((index + 1) / selected.length) * 34);
          setGlobalLoadingProgress(
            progress,
            lang === 'fr'
              ? `Extraction ${index + 1}/${selected.length}…`
              : `Extracting ${index + 1}/${selected.length}…`
          );
          await waitForLoadingFrame();
          const extracted = await item.entry.file.extract();
          textMap.set(item.relativePath.toLowerCase(), await extracted.text());
        }
        const dataset = await parseSvCustomDataset({
          language: getPreferredLanguage(),
          topFolderName,
          sourceName: file?.name || topFolderName,
          game: resolveSvGameHint(file?.name, topFolderName),
          trdataText: getMappedValueBySuffix(textMap, [
            'randomizer/trainers/trdata_array_clean.json',
            'randomizer/trainers/trdata_array.json',
          ]),
          personalText: getMappedValueBySuffix(textMap, [
            'randomizer/personaldata/personal_array_clean.json',
            'randomizer/personaldata/personal_array.json',
          ]),
          pokemonToIdText: getMappedValueBySuffix(textMap, [
            'randomizer/trainers/pokemon_to_id.txt',
            'randomizer/personaldata/pokemon_to_id.txt',
          ]),
        });
        await applyCustomDataset(dataset, file?.name || topFolderName);
        return;
      }
    } finally {
      if (archive && typeof archive.close === 'function') {
        try { await archive.close(); } catch (e) {}
      }
    }

    const looseBinaryResult = await extractArchiveLooseBinaryFiles(file);
    try {
      if (looseBinaryResult.trainer) {
        setGlobalLoadingProgress(24, lang === 'fr' ? 'Extraction des binaires trainer SV…' : 'Extracting SV trainer binaries…');
        await waitForLoadingFrame();
        const parser = await ensureSvBinaryParserLoaded();
        const trainerBinary = await looseBinaryResult.trainer.entry.file.extract();
        const personalBinary = looseBinaryResult.personal
          ? await looseBinaryResult.personal.entry.file.extract()
          : null;
        const trainerJson = parser.parseTrainersBinary(await trainerBinary.arrayBuffer());
        const personalJson = personalBinary
          ? parser.parsePersonalBinary(await personalBinary.arrayBuffer())
          : { entry: [] };
        const dataset = await parseSvCustomDataset({
          language: getPreferredLanguage(),
          topFolderName: looseBinaryResult.topFolderName,
          sourceName: file?.name || looseBinaryResult.topFolderName,
          game: resolveSvGameHint(file?.name, looseBinaryResult.topFolderName),
          trdataText: JSON.stringify(trainerJson),
          personalText: JSON.stringify(personalJson),
          pokemonToIdText: '',
        });
        await applyCustomDataset(dataset, file?.name || looseBinaryResult.topFolderName);
        return;
      }
    } finally {
      if (looseBinaryResult.archive && typeof looseBinaryResult.archive.close === 'function') {
        try { await looseBinaryResult.archive.close(); } catch (e) {}
      }
    }

    const game = resolveSvGameHint(file?.name, topFolderName);
    if (!game) {
      await loadMatchedDataset('scarlet', file?.name || topFolderName || 'Scarlet-Violet archive');
      showToast(lang === 'fr'
        ? 'ℹ️ Archive SV détectée. Pour lire le mod exact, l’archive doit contenir les exports Randomizer ou les binaires loose `trdata_array.bin`; ici le dataset Écarlate vanilla a été utilisé par défaut.'
        : 'ℹ️ SV archive detected. To read the exact mod, the archive must contain Randomizer exports or loose `trdata_array.bin`; Scarlet vanilla data was used here by default.');
      return;
    }
    await loadMatchedDataset(game, file?.name || topFolderName);
  }

  function bindSvFolderInput() {
    const input = document.getElementById('sv-folder-input');
    if (!input || input.dataset.bound === '1') return;
    input.dataset.bound = '1';
    input.addEventListener('change', async event => {
      const files = event.target.files;
      if (!files || !files.length) return;
      try {
        await parseSvFolder(files);
      } catch (error) {
        showToast(`❌ ${String(error?.message || error || 'Erreur dossier Scarlet/Violet')}`);
      } finally {
        hideGlobalLoading();
        event.target.value = '';
      }
    });
  }

  function bindSvArchiveInput() {
    const input = document.getElementById('sv-archive-input');
    if (!input || input.dataset.bound === '1') return;
    input.dataset.bound = '1';
    input.addEventListener('change', async event => {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      try {
        await parseSvArchive(file);
      } catch (error) {
        showToast(`❌ ${String(error?.message || error || 'Erreur archive Scarlet/Violet')}`);
      } finally {
        hideGlobalLoading();
        event.target.value = '';
      }
    });
  }

  bindSvFolderInput();
  bindSvArchiveInput();
  window.bindSvFolderInput = bindSvFolderInput;
  window.bindSvArchiveInput = bindSvArchiveInput;
  window.__parseSvFolder = parseSvFolder;
  window.__parseSvArchive = parseSvArchive;
})();
