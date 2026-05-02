(function () {
  const CURRENT_SCRIPT_BASE_URL = (() => {
    try {
      if (document.currentScript?.src) return new URL('.', document.currentScript.src);
      const matchingScript = Array.from(document.scripts || []).find(script => /swsh-folder-bridge\.js(?:\?|$)/i.test(script?.src || ''));
      if (matchingScript?.src) return new URL('.', matchingScript.src);
    } catch (error) {}
    return new URL('./assets/js/', window.location.href);
  })();

  const TITLE_IDS = {
    sword: '0100ABF008968000',
    shield: '01008DB008C2C000',
  };
  const PERSONAL_ENTRY_SIZE = 0xB0;
  const LEARNSET_ENTRY_SIZE = 0x104;
  const TRAINER_POKE_SIZE = 0x20;
  const REQUIRED_SUFFIXES = {
    personal: ['romfs/bin/pml/personal/personal_total.bin', 'bin/pml/personal/personal_total.bin'],
    learnset: ['romfs/bin/pml/waza_oboe/wazaoboe_total.bin', 'bin/pml/waza_oboe/wazaoboe_total.bin'],
  };
  const REPORT_SUFFIXES = ['romfs/randomizer-report.json', 'randomizer-report.json', 'romfs/trainer-changes.json', 'trainer-changes.json'];
  const TRAINER_DATA_PATTERNS = [
    /(?:^|\/)romfs\/bin\/trainer\/trainer_data\/trainer_data_(\d+)\.bin$/i,
    /(?:^|\/)bin\/trainer\/trainer_data\/trainer_data_(\d+)\.bin$/i,
  ];
  const TRAINER_POKE_PATTERNS = [
    /(?:^|\/)romfs\/bin\/trainer\/trainer_poke\/trainer_poke_(\d+)\.bin$/i,
    /(?:^|\/)bin\/trainer\/trainer_poke\/trainer_poke_(\d+)\.bin$/i,
  ];
  const TYPE_NAMES = {
    fr: ['Normal', 'Combat', 'Vol', 'Poison', 'Sol', 'Roche', 'Insecte', 'Spectre', 'Acier', 'Feu', 'Eau', 'Plante', 'Électrik', 'Psy', 'Glace', 'Dragon', 'Ténèbres', 'Fée'],
    en: ['Normal', 'Fighting', 'Flying', 'Poison', 'Ground', 'Rock', 'Bug', 'Ghost', 'Steel', 'Fire', 'Water', 'Grass', 'Electric', 'Psychic', 'Ice', 'Dragon', 'Dark', 'Fairy'],
  };
  const TYPE_NAME_TO_ID = {
    normal: 0,
    fighting: 1,
    combat: 1,
    flying: 2,
    vol: 2,
    poison: 3,
    ground: 4,
    sol: 4,
    rock: 5,
    roche: 5,
    bug: 6,
    insecte: 6,
    ghost: 7,
    spectre: 7,
    steel: 8,
    acier: 8,
    fire: 9,
    feu: 9,
    water: 10,
    eau: 10,
    grass: 11,
    plante: 11,
    electric: 12,
    electrik: 12,
    psychic: 13,
    psy: 13,
    ice: 14,
    glace: 14,
    dragon: 15,
    dark: 16,
    tenebres: 16,
    ténèbres: 16,
    fairy: 17,
    fee: 17,
    fée: 17,
  };
  const GENDER_LABELS = ['Random', 'Male', 'Female', 'Random'];
  const ABILITY_SLOT_LABELS = {
    fr: { 0: 'Talents possibles', 1: 'Talent 1', 2: 'Talent 2', 3: 'Talent caché' },
    en: { 0: 'Possible abilities', 1: 'Ability 1', 2: 'Ability 2', 3: 'Hidden ability' },
  };
  const FORM_NAME_OVERRIDES = {
    fr: {
      '52:1': 'Miaouss de Galar', '52:2': 'Miaouss de Galar', '77:1': 'Ponyta de Galar', '78:1': 'Galopa de Galar',
      '79:1': 'Ramoloss de Galar', '80:2': 'Flagadoss de Galar', '83:1': 'Canarticho de Galar', '110:1': 'Smogogo de Galar',
      '199:1': 'Roigada de Galar', '222:1': 'Corayon de Galar', '263:1': 'Zigzaton de Galar', '264:1': 'Linéon de Galar',
      '479:1': 'Motisma (Heat)', '479:2': 'Motisma (Wash)', '479:3': 'Motisma (Frost)', '479:4': 'Motisma (Fan)',
      '479:5': 'Motisma (Mow)', '554:1': 'Darumarond de Galar', '555:2': 'Darumacho de Galar', '562:1': 'Tutafeh de Galar',
      '618:1': 'Limonde de Galar', '849:1': 'Salarsen (Forme Grave)', '854:1': 'Théffroi', '855:1': 'Polthégeist',
      '892:1': 'Shifours Style Mille Poings',
    },
    en: {
      '52:1': 'Meowth (Galar)', '52:2': 'Meowth (Galar)', '77:1': 'Ponyta (Galar)', '78:1': 'Rapidash (Galar)',
      '79:1': 'Slowpoke (Galar)', '80:2': 'Slowbro (Galar)', '83:1': 'Farfetch’d (Galar)', '110:1': 'Weezing (Galar)',
      '199:1': 'Slowking (Galar)', '222:1': 'Corsola (Galar)', '263:1': 'Zigzagoon (Galar)', '264:1': 'Linoone (Galar)',
      '479:1': 'Rotom (Heat)', '479:2': 'Rotom (Wash)', '479:3': 'Rotom (Frost)', '479:4': 'Rotom (Fan)',
      '479:5': 'Rotom (Mow)', '554:1': 'Darumaka (Galar)', '555:2': 'Darmanitan (Galar)', '562:1': 'Yamask (Galar)',
      '618:1': 'Stunfisk (Galar)', '849:1': 'Toxtricity (Low Key Form)', '854:1': 'Sinistea', '855:1': 'Polteageist',
      '892:1': 'Urshifu (Rapid Strike Style)',
    },
  };

  let archiveGlobalPromise = null;
  let archiveModulePromise = null;

  function resolveBridgeUrl(relativePath) {
    return new URL(relativePath, CURRENT_SCRIPT_BASE_URL).href;
  }

  function getUiLang() {
    return document.body.classList.contains('lang-en') ? 'en' : 'fr';
  }

  function getPreferredLanguage() {
    return getUiLang() === 'en' ? 'en' : 'fr';
  }

  function stripDiacritics(value) {
    return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function normalizeNameKey(value) {
    return stripDiacritics(String(value || '').toLowerCase())
      .replace(/['’.]/g, ' ')
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();
  }

  function normalizePath(rawPath) {
    return String(rawPath || '').replace(/\\/g, '/').replace(/^\/+/, '').trim();
  }

  function toInt(value, fallback = 0) {
    const parsed = Number.parseInt(value, 10);
    return Number.isFinite(parsed) ? parsed : fallback;
  }

  function readU16(view, offset) {
    return view.getUint16(offset, true);
  }

  function readU32(view, offset) {
    return view.getUint32(offset, true);
  }

  function getTopFolderName(files) {
    const first = Array.from(files || []).find(file => file.webkitRelativePath);
    if (!first) return '';
    return normalizePath(first.webkitRelativePath).split('/')[0] || '';
  }

  function guessSwshGameFromName(name) {
    const lower = stripDiacritics(String(name || '').toLowerCase());
    if (lower.includes(TITLE_IDS.sword.toLowerCase()) || /\bsword\b|\bepee\b|\bépée\b/.test(lower)) return 'sword';
    if (lower.includes(TITLE_IDS.shield.toLowerCase()) || /\bshield\b|\bbouclier\b/.test(lower)) return 'shield';
    return '';
  }

  function guessSwshGameFromReport(report) {
    if (!report || typeof report !== 'object') return '';
    const explicit = guessSwshGameFromName([
      report.sourceGameVersion,
      report.game,
      report.title,
    ].filter(Boolean).join(' '));
    if (explicit) return explicit;
    return guessSwshGameFromName([
      report.sourceRomfs,
      report.outputRomfs,
    ].filter(Boolean).join(' '));
  }

  function inferCurrentSwshGame() {
    try {
      if (typeof vanillaMenuGame !== 'undefined' && (vanillaMenuGame === 'sword' || vanillaMenuGame === 'shield')) return vanillaMenuGame;
    } catch (error) {}
    try {
      const name = stripDiacritics(String(detectedVersionInfo?.name || detectedVersionInfo?.key || '').toLowerCase());
      if (/\bsword\b|\bepee\b|\bépée\b/.test(name)) return 'sword';
      if (/\bshield\b|\bbouclier\b/.test(name)) return 'shield';
    } catch (error) {}
    return '';
  }

  function resolveSwshGameHint(...values) {
    for (const value of values) {
      const guessed = guessSwshGameFromName(value);
      if (guessed) return guessed;
    }
    return inferCurrentSwshGame() || 'sword';
  }

  function getSlugForGame(game, lang) {
    return `pokemon_${game === 'shield' ? 'shield' : 'sword'}_global_${lang === 'en' ? 'en' : 'fr'}`;
  }

  function pickLocalizedName(entry, lang, fallback = '') {
    if (!entry) return fallback;
    return (lang === 'en' ? entry.nameEn : entry.nameFr) || entry.nameEn || entry.nameFr || fallback;
  }

  function buildDexIndexes() {
    const dex = window.LOCAL_DEX_DATA || {};
    const pokemonById = new Map();
    const movesById = new Map();
    const itemsById = new Map();
    const abilitiesById = new Map();
    const abilityIdsByName = new Map();
    Object.values(dex.pokemon || {}).forEach(entry => {
      if (!entry || !Number.isFinite(entry.id)) return;
      if (!pokemonById.has(entry.id)) pokemonById.set(entry.id, []);
      pokemonById.get(entry.id).push(entry);
    });
    Object.values(dex.moves || {}).forEach(entry => {
      if (entry && Number.isFinite(entry.id) && !movesById.has(entry.id)) movesById.set(entry.id, entry);
    });
    Object.values(dex.items || {}).forEach(entry => {
      if (entry && Number.isFinite(entry.id) && !itemsById.has(entry.id)) itemsById.set(entry.id, entry);
    });
    Object.values(dex.abilities || {}).forEach(entry => {
      if (entry && Number.isFinite(entry.id) && !abilitiesById.has(entry.id)) abilitiesById.set(entry.id, entry);
      if (entry?.id && entry?.nameEn) abilityIdsByName.set(normalizeNameKey(entry.nameEn), entry.id);
      if (entry?.id && entry?.nameFr) abilityIdsByName.set(normalizeNameKey(entry.nameFr), entry.id);
    });
    return { pokemonById, movesById, itemsById, abilitiesById, abilityIdsByName };
  }

  async function loadVanillaDataset(game) {
    const lang = getPreferredLanguage();
    const slug = getSlugForGame(game, lang);
    const entry = (typeof getVanillaManifest === 'function' ? getVanillaManifest() : []).find(row => row.slug === slug);
    if (!entry) throw new Error(lang === 'fr' ? `Dataset Vanilla introuvable : ${slug}` : `Vanilla dataset not found: ${slug}`);
    const raw = await ensureVanillaScriptLoaded(slug);
    return { entry, raw };
  }

  function findBySuffix(entries, suffixes) {
    const candidates = (Array.isArray(suffixes) ? suffixes : [suffixes]).map(value => normalizePath(value).toLowerCase());
    for (const [path, entry] of entries.entries()) {
      if (candidates.some(candidate => path === candidate || path.endsWith(`/${candidate}`))) return { relativePath: path, entry };
    }
    return null;
  }

  function collectMatching(entries, patterns) {
    const result = new Map();
    for (const [path, entry] of entries.entries()) {
      for (const pattern of patterns) {
        const match = path.match(pattern);
        if (match) {
          result.set(toInt(match[1], -1), { relativePath: path, entry });
          break;
        }
      }
    }
    return result;
  }

  function detectSwshFolderSelection(fileList) {
    const entries = new Map(Array.from(fileList || []).map(file => [normalizePath(file.webkitRelativePath || file.name).toLowerCase(), file]));
    return {
      topFolderName: getTopFolderName(fileList),
      pathHint: Array.from(entries.keys()).slice(0, 120).join(' '),
      personal: findBySuffix(entries, REQUIRED_SUFFIXES.personal),
      learnset: findBySuffix(entries, REQUIRED_SUFFIXES.learnset),
      report: findBySuffix(entries, REPORT_SUFFIXES),
      trainerData: collectMatching(entries, TRAINER_DATA_PATTERNS),
      trainerPoke: collectMatching(entries, TRAINER_POKE_PATTERNS),
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
          return new Worker(URL.createObjectURL(new Blob([workerSource], { type: 'text/javascript' })));
        },
      };
    }
    return { workerUrl: resolveBridgeUrl('../vendor/libarchivejs/worker-bundle.js') };
  }

  async function loadArchiveGlobalScript() {
    if (window.LibArchiveGlobal?.Archive) return window.LibArchiveGlobal;
    if (!archiveGlobalPromise) {
      archiveGlobalPromise = (async () => {
        if (!window.LIBARCHIVE_INLINE) {
          await new Promise((resolve, reject) => {
            const existing = document.querySelector('script[data-libarchive-inline="1"]');
            if (existing) {
              if (window.LIBARCHIVE_INLINE) return resolve();
              existing.addEventListener('load', resolve, { once: true });
              existing.addEventListener('error', reject, { once: true });
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
          const existing = document.querySelector('script[data-libarchive-global="1"]');
          if (existing) {
            if (window.LibArchiveGlobal?.Archive) return resolve();
            existing.addEventListener('load', resolve, { once: true });
            existing.addEventListener('error', reject, { once: true });
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

  function getArchiveRawEntryPath(entry) {
    const folder = String(entry?.path || '').replace(/\\/g, '/');
    const name = String(entry?.file?.name || '');
    return `${folder}${name}`.replace(/\\/g, '/').replace(/^\/+/, '');
  }

  function inferArchiveTopFolderName(entries, fallbackName = '') {
    const counts = new Map();
    for (const entry of entries || []) {
      const parts = normalizePath(getArchiveRawEntryPath(entry)).split('/').filter(Boolean);
      if (!parts.length) continue;
      const romfsIndex = parts.findIndex(part => /^romfs$/i.test(part));
      const key = romfsIndex > 0 ? parts[romfsIndex - 1] : (parts.length > 1 ? parts[0] : '');
      if (!key) continue;
      counts.set(key, (counts.get(key) || 0) + 1);
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

  async function extractArchiveSwshFiles(file) {
    const mod = await getArchiveModule();
    const { Archive } = mod;
    Archive.init(getLibarchiveInitOptions());
    const archive = await Archive.open(file);
    const filesArray = await archive.getFilesArray();
    const topFolderName = inferArchiveTopFolderName(filesArray, String(file?.name || '').replace(/\.(zip|rar|7z)$/i, ''));
    const entries = new Map();
    for (const item of filesArray || []) {
      const path = normalizePath(getArchiveRawEntryPath(item)).toLowerCase();
      if (path) entries.set(path, item);
    }
    return {
      archive,
      topFolderName,
      pathHint: Array.from(entries.keys()).slice(0, 120).join(' '),
      personal: findBySuffix(entries, REQUIRED_SUFFIXES.personal),
      learnset: findBySuffix(entries, REQUIRED_SUFFIXES.learnset),
      report: findBySuffix(entries, REPORT_SUFFIXES),
      trainerData: collectMatching(entries, TRAINER_DATA_PATTERNS),
      trainerPoke: collectMatching(entries, TRAINER_POKE_PATTERNS),
    };
  }

  async function readFolderReportGame(reportEntry) {
    if (!reportEntry?.entry?.text) return '';
    try {
      return guessSwshGameFromReport(JSON.parse(await reportEntry.entry.text()));
    } catch (error) {
      return '';
    }
  }

  async function readArchiveReportGame(reportEntry) {
    if (!reportEntry?.entry?.file?.extract) return '';
    try {
      const blob = await reportEntry.entry.file.extract();
      return guessSwshGameFromReport(JSON.parse(await blob.text()));
    } catch (error) {
      return '';
    }
  }

  function parsePersonalTable(buffer) {
    const view = new DataView(buffer);
    const count = Math.floor(buffer.byteLength / PERSONAL_ENTRY_SIZE);
    return Array.from({ length: count }, (_, index) => {
      const offset = index * PERSONAL_ENTRY_SIZE;
      return {
        hp: view.getUint8(offset + 0x00),
        atk: view.getUint8(offset + 0x01),
        def: view.getUint8(offset + 0x02),
        spe: view.getUint8(offset + 0x03),
        spa: view.getUint8(offset + 0x04),
        spd: view.getUint8(offset + 0x05),
        type1: view.getUint8(offset + 0x06),
        type2: view.getUint8(offset + 0x07),
        ability1: readU16(view, offset + 0x18),
        ability2: readU16(view, offset + 0x1A),
        abilityH: readU16(view, offset + 0x1C),
        formStatsIndex: readU16(view, offset + 0x1E),
      };
    });
  }

  function getPersonalEntry(personalEntries, speciesId, formId) {
    const base = personalEntries[speciesId];
    if (!base) return null;
    if (!formId) return base;
    const index = base.formStatsIndex ? (base.formStatsIndex + formId - 1) : speciesId;
    return personalEntries[index] || base;
  }

  function parseLearnsetTable(buffer) {
    const view = new DataView(buffer);
    const count = Math.floor(buffer.byteLength / LEARNSET_ENTRY_SIZE);
    return Array.from({ length: count }, (_, index) => {
      const offset = index * LEARNSET_ENTRY_SIZE;
      const moves = [];
      for (let cursor = 0; cursor < LEARNSET_ENTRY_SIZE; cursor += 4) {
        const moveId = readU16(view, offset + cursor);
        const level = readU16(view, offset + cursor + 2);
        if (moveId === 0xFFFF && level === 0xFFFF) break;
        if (moveId && moveId !== 0xFFFF) moves.push({ moveId, level });
      }
      return moves;
    });
  }

  function parseTrainerData(buffer) {
    const view = new DataView(buffer);
    return {
      trainerClassId: readU16(view, 0x00),
      battleType: view.getUint8(0x02),
      numPokemon: view.getUint8(0x03),
      trainerItemIds: [readU16(view, 0x04), readU16(view, 0x06), readU16(view, 0x08), readU16(view, 0x0A)].filter(Boolean),
      ai: readU32(view, 0x0C),
    };
  }

  function parseTrainerParty(buffer) {
    const count = Math.floor(buffer.byteLength / TRAINER_POKE_SIZE);
    const view = new DataView(buffer);
    return Array.from({ length: count }, (_, index) => {
      const offset = index * TRAINER_POKE_SIZE;
      const packed = view.getUint8(offset + 0x00);
      const iv32 = readU32(view, offset + 0x1C);
      return {
        sex: GENDER_LABELS[packed & 0x3] || 'Random',
        abilityChoice: (packed >> 4) & 0x3,
        natureId: view.getUint8(offset + 0x01),
        evs: {
          hp: view.getUint8(offset + 0x02),
          atk: view.getUint8(offset + 0x03),
          def: view.getUint8(offset + 0x04),
          spAtk: view.getUint8(offset + 0x05),
          spDef: view.getUint8(offset + 0x06),
          spd: view.getUint8(offset + 0x07),
        },
        level: readU16(view, offset + 0x0A),
        speciesId: readU16(view, offset + 0x0C),
        formId: readU16(view, offset + 0x0E),
        heldItemId: readU16(view, offset + 0x10),
        movesetIds: [readU16(view, offset + 0x12), readU16(view, offset + 0x14), readU16(view, offset + 0x16), readU16(view, offset + 0x18)].filter(Boolean),
        ivs: {
          hp: (iv32 >> 0) & 0x1F,
          atk: (iv32 >> 5) & 0x1F,
          def: (iv32 >> 10) & 0x1F,
          spd: (iv32 >> 15) & 0x1F,
          spAtk: (iv32 >> 20) & 0x1F,
          spDef: (iv32 >> 25) & 0x1F,
        },
      };
    });
  }

  function selectPokemonDexEntry(speciesId, formId, indexes) {
    const entries = indexes.pokemonById.get(speciesId) || [];
    if (!entries.length) return null;
    if (!formId) return entries[0];
    const altForms = entries.slice(1);
    return altForms[formId - 1] || entries.find(entry => /alola|galar|hisui|paldea|totem|mega|gmax|rapid|lowkey|low-key|wash|heat|frost|fan|mow/i.test(String(entry?.slug || ''))) || entries[0];
  }

  function resolveSpeciesName(speciesId, formId, lang, indexes) {
    const override = FORM_NAME_OVERRIDES[lang]?.[`${speciesId}:${formId}`];
    if (override) return override;
    const preferred = selectPokemonDexEntry(speciesId, formId, indexes);
    return pickLocalizedName(preferred, lang, `${lang === 'fr' ? 'Pokémon' : 'Pokemon'} ${speciesId}`);
  }

  function resolveMoveEntry(moveId, lang, indexes) {
    const move = indexes.movesById.get(moveId);
    const rawType = String(move?.type || move?.typeName || '').trim();
    const normalizedType = stripDiacritics(rawType).toLowerCase();
    const typeId = Number.isFinite(move?.typeId)
      ? move.typeId
      : (TYPE_NAME_TO_ID[normalizedType] ?? 0);
    const kind = String(move?.category || move?.damageClass || '').toLowerCase();
    return {
      id: moveId,
      name: pickLocalizedName(move, lang, `${lang === 'fr' ? 'Attaque' : 'Move'} ${moveId}`),
      typeId,
      type: TYPE_NAMES[lang][typeId] || TYPE_NAMES[lang][0],
      damageClass: kind.includes('special') ? 'special' : (kind.includes('physical') ? 'physical' : 'status'),
      power: Number.isFinite(move?.power) ? move.power : 0,
      pp: Number.isFinite(move?.pp) ? move.pp : 0,
      accuracy: Number.isFinite(move?.accuracy) ? move.accuracy : 101,
      accuracyKnown: Number.isFinite(move?.accuracy) ? move.accuracy <= 100 : false,
    };
  }

  function resolveItemName(itemId, lang, indexes) {
    if (!itemId) return lang === 'fr' ? 'Aucun objet' : 'No item';
    return pickLocalizedName(indexes.itemsById.get(itemId), lang, `${lang === 'fr' ? 'Objet' : 'Item'} ${itemId}`);
  }

  function resolveAbilityInfo(personal, abilityChoice, lang, indexes, dexEntry = null, vanillaMon = null) {
    const fallbackNames = [
      ...(Array.isArray(dexEntry?.abilities) ? dexEntry.abilities : []),
      ...(Array.isArray(vanillaMon?.abilities) ? vanillaMon.abilities : []),
    ].filter(Boolean);
    const fallbackIds = fallbackNames
      .map(name => indexes.abilityIdsByName.get(normalizeNameKey(name)) || 0)
      .filter(Boolean);
    const ids = [personal?.ability1 || 0, personal?.ability2 || 0, personal?.abilityH || 0].filter(Boolean);
    const effectiveIds = ids.length ? ids : fallbackIds;
    let picked = ids;
    if (!effectiveIds.length && !fallbackNames.length) {
      return {
        abilityChoice,
        abilityLabel: ABILITY_SLOT_LABELS[lang][abilityChoice] || ABILITY_SLOT_LABELS[lang][0],
        abilityIds: [],
        abilities: [],
      };
    }
    if (abilityChoice === 1) picked = [effectiveIds[0] || 0].filter(Boolean);
    else if (abilityChoice === 2) picked = [effectiveIds[1] || effectiveIds[0] || 0].filter(Boolean);
    else if (abilityChoice === 3) picked = [effectiveIds[2] || effectiveIds[0] || 0].filter(Boolean);
    else picked = effectiveIds;
    const abilityNames = picked.length
      ? picked.map(id => pickLocalizedName(indexes.abilitiesById.get(id), lang, `${lang === 'fr' ? 'Talent' : 'Ability'} ${id}`))
      : fallbackNames;
    return {
      abilityChoice,
      abilityLabel: ABILITY_SLOT_LABELS[lang][abilityChoice] || ABILITY_SLOT_LABELS[lang][0],
      abilityIds: picked,
      abilities: abilityNames,
    };
  }

  function deriveLearnsetMoves(learnsetTable, personalEntries, speciesId, formId, level) {
    const base = personalEntries[speciesId];
    if (!base) return [];
    const learnsetIndex = !formId ? speciesId : (base.formStatsIndex ? (base.formStatsIndex + formId - 1) : speciesId);
    return (learnsetTable[learnsetIndex] || []).filter(move => move.level <= level).map(move => move.moveId).slice(-4);
  }

  function resolveTypeIds(personal, dexEntry = null, vanillaMon = null) {
    if (personal) {
      const ids = [personal.type1, personal.type2]
        .filter((value, index, array) => Number.isFinite(value) && (index === 0 || value !== array[0]));
      return ids.length ? ids : [0];
    }
    const fallbackTypes = [
      ...(Array.isArray(dexEntry?.types) ? dexEntry.types : []),
      ...(Array.isArray(vanillaMon?.types) ? vanillaMon.types : []),
    ];
    const ids = fallbackTypes
      .map(typeName => TYPE_NAME_TO_ID[normalizeNameKey(typeName)])
      .filter((value, index, array) => Number.isFinite(value) && (index === 0 || value !== array[index - 1]));
    return ids.length ? ids : [0];
  }

  function resolveBaseStats(personal, dexEntry = null, vanillaMon = null) {
    if (personal) {
      return { hp: personal.hp, atk: personal.atk, def: personal.def, spAtk: personal.spa, spDef: personal.spd, spd: personal.spe };
    }
    const dexStats = dexEntry?.baseStats || vanillaMon?.baseStats || {};
    return {
      hp: Number(dexStats.hp || 0),
      atk: Number(dexStats.atk || dexStats.attack || 0),
      def: Number(dexStats.def || dexStats.defense || 0),
      spAtk: Number(dexStats.spa || dexStats.spAtk || dexStats.specialAttack || 0),
      spDef: Number(dexStats.spd || dexStats.spDef || dexStats.specialDefense || 0),
      spd: Number(dexStats.spe || dexStats.speed || 0),
    };
  }

  function buildLookupPayload(trainers) {
    const speciesEntries = new Map();
    const moveEntries = new Map();
    const itemEntries = new Map();
    const abilityEntries = new Map();
    for (const trainer of trainers) {
      for (const mon of trainer.party || []) {
        if (mon.speciesId && !speciesEntries.has(mon.speciesId)) speciesEntries.set(mon.speciesId, { id: mon.speciesId, nameEn: mon.species, nameFr: mon.species });
        for (const move of mon.moveDetails || []) if (move?.id && !moveEntries.has(move.id)) moveEntries.set(move.id, move);
        if (mon.heldItemId && mon.heldItem && !itemEntries.has(mon.heldItemId)) itemEntries.set(mon.heldItemId, { id: mon.heldItemId, nameEn: mon.heldItem, nameFr: mon.heldItem });
        (mon.abilityIds || []).forEach((id, index) => {
          if (id && mon.abilities?.[index] && !abilityEntries.has(id)) abilityEntries.set(id, { id, nameEn: mon.abilities[index], nameFr: mon.abilities[index] });
        });
      }
    }
    return {
      speciesEntries: Array.from(speciesEntries.values()),
      moveEntries: Array.from(moveEntries.values()),
      itemEntries: Array.from(itemEntries.values()),
      abilityEntries: Array.from(abilityEntries.values()),
      typeEntries: TYPE_NAMES.fr.map((nameFr, id) => ({ id, nameFr, nameEn: TYPE_NAMES.en[id] || nameFr })),
    };
  }

  async function buildSwshDataset(payload) {
    const lang = payload.language === 'en' ? 'en' : 'fr';
    const game = resolveSwshGameHint(payload.game, payload.sourceName, payload.topFolderName);
    const indexes = buildDexIndexes();
    const { raw: vanillaData } = await loadVanillaDataset(game);
    const vanillaTrainerMap = new Map((vanillaData?.trainers || []).map(trainer => [toInt(trainer?.trainerId, -1), trainer]));
    const [personalEntries, learnsetTable] = await Promise.all([
      typeof payload.loadPersonal === 'function' ? payload.loadPersonal() : Promise.resolve(null),
      typeof payload.loadLearnset === 'function' ? payload.loadLearnset() : Promise.resolve(null),
    ]);
    const trainerIds = Array.from(new Set([...payload.trainerData.keys(), ...payload.trainerPoke.keys(), ...vanillaTrainerMap.keys()])).filter(id => id > 0).sort((a, b) => a - b);
    const trainers = [];
    for (let index = 0; index < trainerIds.length; index += 1) {
      const trainerId = trainerIds[index];
      const trainerDataLoader = payload.trainerData.get(trainerId);
      const trainerPokeLoader = payload.trainerPoke.get(trainerId);
      if (!trainerDataLoader || !trainerPokeLoader) continue;
      setGlobalLoadingProgress(26 + Math.round(((index + 1) / Math.max(trainerIds.length, 1)) * 52), lang === 'fr' ? `Lecture des dresseurs SWSH ${index + 1}/${trainerIds.length}…` : `Reading SWSH trainers ${index + 1}/${trainerIds.length}…`);
      await waitForLoadingFrame();
      const trainerData = parseTrainerData(await trainerDataLoader());
      const partyMons = parseTrainerParty(await trainerPokeLoader()).slice(0, trainerData.numPokemon || 6).filter(mon => mon.speciesId > 0);
      if (!partyMons.length) continue;
      const vanillaTrainer = vanillaTrainerMap.get(trainerId);
      const party = partyMons.map((mon, monIndex) => {
        const vanillaMon = Array.isArray(vanillaTrainer?.party) ? vanillaTrainer.party[monIndex] : null;
        const dexEntry = selectPokemonDexEntry(mon.speciesId, mon.formId, indexes);
        const personal = personalEntries ? getPersonalEntry(personalEntries, mon.speciesId, mon.formId) : null;
        const moveIds = mon.movesetIds.length
          ? mon.movesetIds.slice(0, 4)
          : (learnsetTable && personalEntries
            ? deriveLearnsetMoves(learnsetTable, personalEntries, mon.speciesId, mon.formId, mon.level)
            : (Array.isArray(vanillaMon?.movesetIds) ? vanillaMon.movesetIds.slice(0, 4).filter(Boolean) : []));
        const moveDetails = moveIds.map(id => resolveMoveEntry(id, lang, indexes));
        const abilityInfo = resolveAbilityInfo(personal, mon.abilityChoice, lang, indexes, dexEntry, vanillaMon);
        const typeIds = resolveTypeIds(personal, dexEntry, vanillaMon);
        return {
          speciesId: mon.speciesId,
          species: resolveSpeciesName(mon.speciesId, mon.formId, lang, indexes),
          formId: mon.formId,
          level: mon.level,
          sex: mon.sex,
          heldItemId: mon.heldItemId,
          heldItem: resolveItemName(mon.heldItemId, lang, indexes),
          natureId: mon.natureId,
          nature: '',
          movesetIds: moveIds,
          moveset: moveDetails.map(move => move.name),
          moveDetails,
          movesSource: mon.movesetIds.length ? 'explicit' : 'learnset',
          typeIds,
          types: typeIds.map(id => TYPE_NAMES[lang][id] || TYPE_NAMES[lang][0]),
          abilityChoice: abilityInfo.abilityChoice,
          abilityLabel: abilityInfo.abilityLabel,
          abilities: abilityInfo.abilities,
          abilityIds: abilityInfo.abilityIds,
          baseStats: resolveBaseStats(personal, dexEntry, vanillaMon),
          ivs: mon.ivs,
          evs: mon.evs,
          difficulty: 0,
          ball: 0,
          unknown: 0,
        };
      });
      trainers.push({
        trainerId,
        name: vanillaTrainer?.name || `${lang === 'fr' ? 'Dresseur' : 'Trainer'} ${trainerId}`,
        trainerClassId: trainerData.trainerClassId,
        trainerClassName: vanillaTrainer?.trainerClassName || (lang === 'fr' ? 'Dresseur' : 'Trainer'),
        fullDisplayName: vanillaTrainer?.fullDisplayName || vanillaTrainer?.name || `${lang === 'fr' ? 'Dresseur' : 'Trainer'} ${trainerId}`,
        battleType: trainerData.battleType,
        battleType2: vanillaTrainer?.battleType2 || 0,
        trainerItemIds: trainerData.trainerItemIds,
        trainerItems: trainerData.trainerItemIds.map(id => resolveItemName(id, lang, indexes)).filter(Boolean),
        ai: trainerData.ai,
        party,
      });
    }
    const dataset = {
      meta: {
        sourceFile: payload.sourceName || payload.topFolderName || `SWSH mod (${game}, ${lang})`,
        title: game === 'shield' ? 'Pokemon Shield' : 'Pokemon Sword',
        idCode: '',
        productCode: '',
        titleId: TITLE_IDS[game] || '',
        game,
        family: 'gen8',
        language: lang,
        regions: ['global'],
        trainerCount: trainers.length,
      },
      trainers,
    };
    Object.assign(dataset, buildLookupPayload(trainers));
    return dataset;
  }

  async function applyCustomDataset(dataset, sourceName) {
    setGlobalLoadingProgress(88, getUiLang() === 'fr' ? 'Application des données…' : 'Applying parsed data…');
    await waitForLoadingFrame();
    setLang((dataset?.meta?.language || 'fr') === 'en' ? 'en' : 'fr');
    vanillaMenuGame = dataset?.meta?.game || '';
    await applyJSONData(dataset, sourceName || dataset?.meta?.sourceFile || 'custom_swsh');
    renderVanillaOptionsMenu();
    showToast(getUiLang() === 'fr' ? `✅ Dossier/archive SWSH analysé : ${dataset?.meta?.title || sourceName || 'SWSH'}` : `✅ SWSH folder/archive parsed: ${dataset?.meta?.title || sourceName || 'SWSH'}`);
    const dd = document.getElementById('options-dropdown');
    if (dd) dd.classList.remove('open');
  }

  async function parseSwshFolder(fileList) {
    const lang = getUiLang();
    const selection = detectSwshFolderSelection(fileList);
    if (!selection.trainerData.size || !selection.trainerPoke.size) {
      throw new Error(lang === 'fr' ? 'Dossier Sword/Shield non reconnu. Il faut au minimum un `romfs` avec `trainer_data` et `trainer_poke`.' : 'Unrecognized Sword/Shield folder. It must include at least a `romfs` with `trainer_data` and `trainer_poke`.');
    }
    showGlobalLoading(lang === 'fr' ? 'Analyse dossier Sword / Shield' : 'Analyzing Sword / Shield folder', lang === 'fr' ? `Reconnaissance de ${selection.topFolderName || 'ton dossier'}…` : `Recognizing ${selection.topFolderName || 'your folder'}…`);
    await waitForLoadingFrame();
    setGlobalLoadingProgress(14, lang === 'fr' ? 'Préparation des binaires SWSH…' : 'Preparing SWSH binaries…');
    await waitForLoadingFrame();
    const reportGame = await readFolderReportGame(selection.report);
    const dataset = await buildSwshDataset({
      language: getPreferredLanguage(),
      topFolderName: selection.topFolderName,
      sourceName: selection.topFolderName,
      game: resolveSwshGameHint(reportGame, selection.topFolderName, selection.pathHint),
      loadPersonal: selection.personal ? async () => parsePersonalTable(await selection.personal.entry.arrayBuffer()) : null,
      loadLearnset: selection.learnset ? async () => parseLearnsetTable(await selection.learnset.entry.arrayBuffer()) : null,
      trainerData: new Map(Array.from(selection.trainerData.entries()).map(([id, item]) => [id, () => item.entry.arrayBuffer()])),
      trainerPoke: new Map(Array.from(selection.trainerPoke.entries()).map(([id, item]) => [id, () => item.entry.arrayBuffer()])),
    });
    await applyCustomDataset(dataset, selection.topFolderName);
  }

  async function parseSwshArchive(file) {
    const lang = getUiLang();
    showGlobalLoading(lang === 'fr' ? 'Analyse archive Sword / Shield' : 'Analyzing Sword / Shield archive', lang === 'fr' ? `Ouverture de ${file?.name || "l'archive"}…` : `Opening ${file?.name || 'archive'}…`);
    await waitForLoadingFrame();
    setGlobalLoadingProgress(10, lang === 'fr' ? 'Lecture de l’archive…' : 'Reading archive…');
    await waitForLoadingFrame();
    const extracted = await extractArchiveSwshFiles(file);
    try {
      if (!extracted.trainerData.size || !extracted.trainerPoke.size) {
        throw new Error(lang === 'fr' ? 'Archive Sword/Shield non reconnue. Il faut au minimum un `romfs` avec `trainer_data` et `trainer_poke`.' : 'Unrecognized Sword/Shield archive. It must include at least a `romfs` with `trainer_data` and `trainer_poke`.');
      }
      const reportGame = await readArchiveReportGame(extracted.report);
      const dataset = await buildSwshDataset({
        language: getPreferredLanguage(),
        topFolderName: extracted.topFolderName,
        sourceName: file?.name || extracted.topFolderName,
        game: resolveSwshGameHint(reportGame, file?.name, extracted.topFolderName, extracted.pathHint),
        loadPersonal: extracted.personal ? async () => parsePersonalTable(await (await extracted.personal.entry.file.extract()).arrayBuffer()) : null,
        loadLearnset: extracted.learnset ? async () => parseLearnsetTable(await (await extracted.learnset.entry.file.extract()).arrayBuffer()) : null,
        trainerData: new Map(Array.from(extracted.trainerData.entries()).map(([id, item]) => [id, async () => (await (await item.entry.file.extract()).arrayBuffer())])),
        trainerPoke: new Map(Array.from(extracted.trainerPoke.entries()).map(([id, item]) => [id, async () => (await (await item.entry.file.extract()).arrayBuffer())])),
      });
      await applyCustomDataset(dataset, file?.name || extracted.topFolderName);
    } finally {
      if (extracted.archive && typeof extracted.archive.close === 'function') {
        try { await extracted.archive.close(); } catch (error) {}
      }
    }
  }

  function bindSwshFolderInput() {
    const input = document.getElementById('swsh-folder-input');
    if (!input || input.dataset.bound === '1') return;
    input.dataset.bound = '1';
    input.addEventListener('change', async event => {
      const files = event.target.files;
      if (!files || !files.length) return;
      try {
        await parseSwshFolder(files);
      } catch (error) {
        showToast(`❌ ${String(error?.message || error || 'Erreur dossier Sword/Shield')}`);
      } finally {
        hideGlobalLoading();
        event.target.value = '';
      }
    });
  }

  function bindSwshArchiveInput() {
    const input = document.getElementById('swsh-archive-input');
    if (!input || input.dataset.bound === '1') return;
    input.dataset.bound = '1';
    input.addEventListener('change', async event => {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      try {
        await parseSwshArchive(file);
      } catch (error) {
        showToast(`❌ ${String(error?.message || error || 'Erreur archive Sword/Shield')}`);
      } finally {
        hideGlobalLoading();
        event.target.value = '';
      }
    });
  }

  bindSwshFolderInput();
  bindSwshArchiveInput();
  window.bindSwshFolderInput = bindSwshFolderInput;
  window.bindSwshArchiveInput = bindSwshArchiveInput;
  window.__parseSwshFolder = parseSwshFolder;
  window.__parseSwshArchive = parseSwshArchive;
})();
