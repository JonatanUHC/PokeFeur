import { Buffer } from 'buffer';
import { load as loadAssetBundle } from '../../../node_modules/@arkntools/unity-js/dist/load.js';
import { AssetType } from '../../../node_modules/@arkntools/unity-js/dist/classes/types.js';

if (!globalThis.Buffer) {
  globalThis.Buffer = Buffer;
}

const REQUIRED_PATHS = [
  'romfs/data/streamingassets/assetassistant/dpr/masterdatas',
  'romfs/data/streamingassets/assetassistant/pml/personal_masterdatas',
  'romfs/data/streamingassets/assetassistant/battle/battle_masterdatas',
  'romfs/data/streamingassets/assetassistant/message/common_msbt',
];

const LANGUAGE_SUFFIXES = {
  fr: 'romfs/data/streamingassets/assetassistant/message/french',
  en: 'romfs/data/streamingassets/assetassistant/message/english',
};

const LANGUAGE_FOLDERS = {
  fr: 'french',
  en: 'english',
};

const DAMAGE_CLASS_MAP = {
  0: 'status',
  1: 'physical',
  2: 'special',
};

const SEX_MAP = {
  0: 'Random',
  1: 'Male',
  2: 'Female',
  3: 'Genderless',
};

function normalizePath(input) {
  const cleaned = String(input || '').replace(/\\/g, '/').replace(/^\/+/, '').trim();
  if (!cleaned) return '';
  const lower = cleaned.toLowerCase();
  const romfsIndex = lower.indexOf('/romfs/');
  if (romfsIndex >= 0) return cleaned.slice(romfsIndex + 1).toLowerCase();
  if (lower.startsWith('romfs/')) return lower;
  const assetIndex = lower.indexOf('data/streamingassets/assetassistant/');
  if (assetIndex >= 0) return `romfs/${lower.slice(assetIndex)}`;
  return lower;
}

function stripDiacritics(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function guessProfileAndVariant(nameHint = '') {
  const lower = stripDiacritics(String(nameHint || '').toLowerCase());
  const isLumi = /luminescent|lumi/.test(lower);
  const isPearl = /\bsp\b|perle|pearl|shining|scintillante/.test(lower);
  return {
    profile: isLumi ? 'luminescent' : 'bdsp',
    variant: isPearl ? 'pearl' : 'diamond',
  };
}

function getLanguageChoice(filesMap, preferredLanguage = 'fr') {
  const preferred = preferredLanguage === 'en' ? 'en' : 'fr';
  if (filesMap.has(LANGUAGE_SUFFIXES[preferred])) return preferred;
  if (preferred !== 'fr' && filesMap.has(LANGUAGE_SUFFIXES.fr)) return 'fr';
  if (preferred !== 'en' && filesMap.has(LANGUAGE_SUFFIXES.en)) return 'en';
  return null;
}

function readWordArray(words) {
  if (!Array.isArray(words)) return '';
  return words.map(word => String(word?.str || '')).join('');
}

function createLabelMap(messageTree) {
  const map = new Map();
  const labels = Array.isArray(messageTree?.labelDataArray) ? messageTree.labelDataArray : [];
  labels.forEach((label, index) => {
    const labelName = String(label?.labelName || '');
    const text = readWordArray(label?.wordDataArray);
    if (labelName) map.set(labelName, text);
    map.set(`__index__${index}`, text);
  });
  return map;
}

function lookupTextAt(labelMap, index, fallback = '') {
  return String(labelMap.get(`__index__${index}`) || fallback || '');
}

function lookupLabel(labelMap, key, fallback = '') {
  if (!key) return fallback;
  return String(labelMap.get(String(key)) || fallback || '');
}

function uniquePositiveInts(values) {
  return [...new Set((values || []).map(value => Number(value) || 0).filter(value => value > 0))];
}

function plainStats(values = {}) {
  return {
    hp: Number(values.hp) || 0,
    atk: Number(values.atk) || 0,
    def: Number(values.def) || 0,
    spAtk: Number(values.spAtk) || 0,
    spDef: Number(values.spDef) || 0,
    spd: Number(values.spd) || 0,
  };
}

async function loadMonoTrees(rawBuffer) {
  const bundle = await loadAssetBundle(rawBuffer);
  const trees = new Map();
  for (const object of bundle.objects || []) {
    if (object.type !== AssetType.MonoBehaviour || !object.name || typeof object.getTypeTree !== 'function') continue;
    trees.set(object.name, object.getTypeTree() || {});
  }
  return trees;
}

function reportProgress(options, percent, stage, detail = '') {
  const reporter = options?.reportProgress;
  if (typeof reporter === 'function') {
    reporter({
      percent,
      stage,
      detail,
    });
  }
}

function getRequiredTree(map, name) {
  const tree = map.get(name);
  if (!tree) {
    throw new Error(`Table Unity introuvable: ${name}`);
  }
  return tree;
}

function getMessageTree(commonTrees, langTrees, name) {
  return langTrees.get(name) || commonTrees.get(name) || null;
}

function buildTypeEntries(typeMap) {
  const entries = [];
  let index = 0;
  while (typeMap.has(`__index__${index}`)) {
    const name = lookupTextAt(typeMap, index, '');
    if (name.trim()) {
      entries.push({ id: index, name });
    }
    index += 1;
  }
  return entries;
}

function buildSimpleEntries(labelMap, upperBound = null) {
  const entries = [];
  let index = 0;
  while (labelMap.has(`__index__${index}`) || (upperBound !== null && index < upperBound)) {
    const name = lookupTextAt(labelMap, index, '');
    if (name.trim() || upperBound !== null) {
      entries.push({ id: index, name });
    }
    index += 1;
    if (upperBound !== null && index >= upperBound && !labelMap.has(`__index__${index}`)) break;
  }
  return entries;
}

function getLearnsetMoves(learnsetRow, level, moveById) {
  const pairs = Array.isArray(learnsetRow?.ar) ? learnsetRow.ar : [];
  const eligible = [];
  for (let index = 0; index < pairs.length - 1; index += 2) {
    const learnLevel = Number(pairs[index]) || 0;
    const moveId = Number(pairs[index + 1]) || 0;
    if (moveId > 0 && learnLevel <= level) eligible.push(moveId);
  }
  return eligible
    .slice(-4)
    .map(moveId => moveById.get(moveId))
    .filter(Boolean);
}

function createSpeciesEntries(personalRows, speciesTexts, typeNameById) {
  const speciesEntries = [];
  const speciesByKey = new Map();

  for (const row of personalRows || []) {
    const personalId = Number(row?.id) || 0;
    const speciesId = Number(row?.monsno) || 0;
    if (personalId <= 0 || speciesId <= 0) continue;

    const formIndex = Number(row?.form_index) || 0;
    const formMax = Number(row?.form_max) || 0;
    let formId = 0;
    if (personalId !== speciesId) {
      formId = personalId - formIndex + 1;
      if (formId < 0) formId = 0;
    }

    const speciesName = lookupTextAt(speciesTexts, personalId, lookupTextAt(speciesTexts, speciesId, `Pokémon ${speciesId}`));
    const type1 = Number(row?.type1) || 0;
    const type2 = Number(row?.type2) || 0;
    const typeIds = type1 === type2 ? [type1] : [type1, type2];
    const abilityIds = uniquePositiveInts([row?.tokusei1, row?.tokusei2, row?.tokusei3]);

    const entry = {
      personalId,
      speciesId,
      formIndex,
      formId,
      formMax,
      name: speciesName,
      typeIds,
      types: typeIds.map(typeId => typeNameById.get(typeId) || String(typeId)),
      baseStats: plainStats({
        hp: row?.basic_hp,
        atk: row?.basic_atk,
        def: row?.basic_def,
        spd: row?.basic_agi,
        spAtk: row?.basic_spatk,
        spDef: row?.basic_spdef,
      }),
      abilityIds,
    };

    speciesEntries.push(entry);
    speciesByKey.set(`${speciesId}|${formIndex}`, entry);
    speciesByKey.set(`${speciesId}|${formId}`, entry);
    if (!speciesByKey.has(`${speciesId}|0`)) {
      speciesByKey.set(`${speciesId}|0`, entry);
    }
  }

  return { speciesEntries, speciesByKey };
}

function createMoveEntries(moveRows, moveTexts, typeNameById, battleWazaDataRows) {
  const moveEntries = [];
  const moveById = new Map();

  (moveRows || []).forEach((row, moveId) => {
    const typeId = Number(row?.type) || 0;
    const damageType = Number(row?.damageType) || 0;
    const power = Number(row?.power) || 0;
    const animation = battleWazaDataRows?.[moveId]?.CmdSeqName || '';
    const entry = {
      id: moveId,
      name: lookupTextAt(moveTexts, moveId, ''),
      typeId,
      type: typeNameById.get(typeId) || String(typeId),
      damageClass: DAMAGE_CLASS_MAP[damageType] || (power > 0 ? 'physical' : 'status'),
      power,
      accuracy: Number(row?.hitPer) || 0,
      accuracyKnown: true,
      pp: Number(row?.basePP) || 0,
      priority: Number(row?.priority) || 0,
      animation,
    };
    moveEntries.push(entry);
    moveById.set(moveId, entry);
  });

  return { moveEntries, moveById };
}

function buildTrainerTypeEntries(rows, trainerTypeTexts) {
  const trainerTypes = [];
  const trainerTypeById = new Map();
  (rows || []).forEach((row, trainerTypeId) => {
    if (Number(row?.TrainerID) === -1) return;
    const entry = {
      id: trainerTypeId,
      label: String(row?.LabelTrType || ''),
      name: lookupLabel(trainerTypeTexts, row?.LabelTrType, ''),
    };
    trainerTypes.push(entry);
    trainerTypeById.set(trainerTypeId, entry);
  });
  return { trainerTypes, trainerTypeById };
}

function buildItemEntries(rows, itemTexts) {
  const itemEntries = [];
  const itemById = new Map();
  (rows || []).forEach((_, itemId) => {
    const entry = {
      id: itemId,
      name: lookupTextAt(itemTexts, itemId, ''),
    };
    itemEntries.push(entry);
    itemById.set(itemId, entry);
  });
  return { itemEntries, itemById };
}

function buildAbilityEntries(abilityTexts) {
  const abilityEntries = buildSimpleEntries(abilityTexts, 400);
  const abilityById = new Map(abilityEntries.map(entry => [entry.id, entry.name]));
  return { abilityEntries, abilityById };
}

function buildNatureEntries(natureTexts) {
  const natureEntries = buildSimpleEntries(natureTexts);
  const natureById = new Map(natureEntries.map(entry => [entry.id, entry.name]));
  return { natureEntries, natureById };
}

function buildParty(trainerPokemonRow, helpers) {
  const party = [];
  for (let slot = 1; slot <= 6; slot += 1) {
    const speciesId = Number(trainerPokemonRow?.[`P${slot}MonsNo`]) || 0;
    if (!speciesId) break;

    const formId = Number(trainerPokemonRow?.[`P${slot}FormNo`]) || 0;
    const level = Number(trainerPokemonRow?.[`P${slot}Level`]) || 0;
    const sexId = Number(trainerPokemonRow?.[`P${slot}Sex`]) || 0;
    const natureId = Number(trainerPokemonRow?.[`P${slot}Seikaku`]) || 0;
    const abilityId = Number(trainerPokemonRow?.[`P${slot}Tokusei`]) || 0;
    const heldItemId = Number(trainerPokemonRow?.[`P${slot}Item`]) || 0;
    const ballId = Number(trainerPokemonRow?.[`P${slot}Ball`]) || 0;

    const speciesRow = helpers.speciesByKey.get(`${speciesId}|${formId}`) || helpers.speciesByKey.get(`${speciesId}|0`) || null;
    const moveIds = [1, 2, 3, 4]
      .map(moveSlot => Number(trainerPokemonRow?.[`P${slot}Waza${moveSlot}`]) || 0)
      .filter(Boolean);

    let moveDetails = moveIds.map(moveId => helpers.moveById.get(moveId)).filter(Boolean);
    let movesSource = 'explicit';
    let resolvedMoveIds = [...moveIds];

    if (!moveDetails.length && speciesRow) {
      const learnsetRow = helpers.learnsetRows?.[speciesRow.personalId];
      moveDetails = getLearnsetMoves(learnsetRow, level, helpers.moveById);
      if (moveDetails.length) {
        movesSource = 'learnset';
        resolvedMoveIds = moveDetails.map(move => move.id);
      }
    }

    const allAbilityIds = speciesRow ? [...speciesRow.abilityIds] : [];
    let abilities = allAbilityIds
      .map(id => helpers.abilityById.get(id))
      .filter(Boolean);
    let resolvedAbilityIds = [...allAbilityIds];
    if (abilityId > 0) {
      const chosen = helpers.abilityById.get(abilityId);
      if (chosen) {
        abilities = [chosen];
        resolvedAbilityIds = [abilityId];
      }
    }

    party.push({
      speciesId,
      species: speciesRow ? speciesRow.name : `Pokémon ${speciesId}`,
      formId,
      level,
      sex: SEX_MAP[sexId] || 'Random',
      heldItemId,
      heldItem: helpers.itemById.get(heldItemId)?.name || '',
      nature: helpers.natureById.get(natureId) || '',
      natureId,
      movesetIds: resolvedMoveIds,
      moveset: moveDetails.map(move => move.name),
      moveDetails,
      movesSource,
      types: speciesRow ? [...speciesRow.types] : [],
      typeIds: speciesRow ? [...speciesRow.typeIds] : [],
      abilityChoice: abilityId,
      abilities,
      abilityIds: resolvedAbilityIds,
      baseStats: speciesRow ? speciesRow.baseStats : plainStats(),
      ivs: plainStats({
        hp: trainerPokemonRow?.[`P${slot}TalentHp`],
        atk: trainerPokemonRow?.[`P${slot}TalentAtk`],
        def: trainerPokemonRow?.[`P${slot}TalentDef`],
        spAtk: trainerPokemonRow?.[`P${slot}TalentSpAtk`],
        spDef: trainerPokemonRow?.[`P${slot}TalentSpDef`],
        spd: trainerPokemonRow?.[`P${slot}TalentAgi`],
      }),
      evs: plainStats({
        hp: trainerPokemonRow?.[`P${slot}EffortHp`],
        atk: trainerPokemonRow?.[`P${slot}EffortAtk`],
        def: trainerPokemonRow?.[`P${slot}EffortDef`],
        spAtk: trainerPokemonRow?.[`P${slot}EffortSpAtk`],
        spDef: trainerPokemonRow?.[`P${slot}EffortSpDef`],
        spd: trainerPokemonRow?.[`P${slot}EffortAgi`],
      }),
      difficulty: 0,
      ball: ballId,
      unknown: 0,
    });
  }
  return party;
}

function createTrainerEntries(trainerRows, trainerPokeRows, helpers, trainerNames, trainerTypeById) {
  const trainers = [];
  const upperBound = Math.min(trainerRows.length, trainerPokeRows.length);

  for (let trainerId = 0; trainerId < upperBound; trainerId += 1) {
    const row = trainerRows[trainerId];
    const trainerTypeId = Number(row?.TypeID) || 0;
    const trainerType = trainerTypeById.get(trainerTypeId) || null;
    const trainerName = lookupLabel(trainerNames, row?.NameLabel, '');
    const trainerClassName = trainerType?.name || '';
    const fullDisplayName = [trainerClassName, trainerName].filter(Boolean).join(' ').trim();

    const trainerItemIds = uniquePositiveInts([
      row?.UseItem1,
      row?.UseItem2,
      row?.UseItem3,
      row?.UseItem4,
    ]);

    const party = buildParty(trainerPokeRows[trainerId], helpers);
    const hasVisibleName = fullDisplayName && fullDisplayName !== '-';
    if (!party.length && !hasVisibleName) continue;
    if (!party.length && trainerId === 0) continue;

    trainers.push({
      trainerId,
      name: trainerName || `[~ ${trainerId}]`,
      trainerClassId: trainerTypeId,
      trainerClassName,
      fullDisplayName,
      battleType: Number(row?.FightType) || 0,
      battleType2: 0,
      trainerItemIds,
      trainerItems: trainerItemIds.map(id => helpers.itemById.get(id)?.name || '').filter(Boolean),
      ai: Number(row?.AIBit) || 0,
      party,
    });
  }

  return trainers;
}

function inferParsedProfile(initialProfile, trainers = [], nameHint = '') {
  if (initialProfile === 'luminescent') {
    return {
      profile: 'luminescent',
      reason: 'name-hint',
    };
  }

  const normalizedHint = stripDiacritics(String(nameHint || '').toLowerCase());
  if (/luminescent|lumi/.test(normalizedHint)) {
    return {
      profile: 'luminescent',
      reason: 'name-hint',
    };
  }

  const normalizedTrainerNames = (trainers || []).map(trainer =>
    stripDiacritics(`${trainer?.fullDisplayName || ''} ${trainer?.name || ''}`.toLowerCase()),
  );
  const cynthiaTeamCount = normalizedTrainerNames.filter(name => /\bcynthia\b/.test(name)).length;

  if (cynthiaTeamCount >= 8) {
    return {
      profile: 'luminescent',
      reason: 'cynthia-team-count',
    };
  }

  if ((trainers || []).length >= 1400) {
    return {
      profile: 'luminescent',
      reason: 'trainer-count',
    };
  }

  return {
    profile: initialProfile || 'bdsp',
    reason: 'default-bdsp',
  };
}

export async function parseBdspCustomBuffers(fileEntries, options = {}) {
  const filesMap = new Map(
    (fileEntries || [])
      .map(entry => ({
        path: normalizePath(entry?.path || entry?.relativePath || entry?.name),
        buffer: entry?.buffer,
      }))
      .filter(entry => entry.path && entry.buffer)
      .map(entry => [entry.path, entry.buffer]),
  );

  const missing = REQUIRED_PATHS.filter(path => !filesMap.has(path));
  if (missing.length) {
    throw new Error(`Dossier/archive incomplet : ${missing.length} bundle(s) requis manquant(s)`);
  }

  const language = getLanguageChoice(filesMap, options.language || 'fr');
  if (!language) {
    throw new Error('Bundle Message français/anglais introuvable');
  }

  reportProgress(options, 50, 'bootstrap', 'Préparation du parseur Unity');
  reportProgress(options, 54, 'bundle', 'DPR/masterdatas');
  const masterTrees = await loadMonoTrees(filesMap.get(REQUIRED_PATHS[0]));
  reportProgress(options, 60, 'bundle', 'PML/personal_masterdatas');
  const personalTrees = await loadMonoTrees(filesMap.get(REQUIRED_PATHS[1]));
  reportProgress(options, 66, 'bundle', 'Battle/battle_masterdatas');
  const battleTrees = await loadMonoTrees(filesMap.get(REQUIRED_PATHS[2]));
  reportProgress(options, 72, 'bundle', 'Message/common_msbt');
  const commonTrees = await loadMonoTrees(filesMap.get(REQUIRED_PATHS[3]));
  reportProgress(options, 78, 'bundle', `Message/${LANGUAGE_FOLDERS[language]}`);
  const langTrees = await loadMonoTrees(filesMap.get(LANGUAGE_SUFFIXES[language]));

  reportProgress(options, 82, 'tables', 'Extraction des tables Unity');

  const trainerTable = getRequiredTree(masterTrees, 'TrainerTable');
  const personalTable = getRequiredTree(personalTrees, 'PersonalTable');
  const moveTable = getRequiredTree(personalTrees, 'WazaTable');
  const learnsetTable = getRequiredTree(personalTrees, 'WazaOboeTable');
  const itemTable = getRequiredTree(personalTrees, 'ItemTable');
  const battleDataTable = getRequiredTree(battleTrees, 'BattleDataTable');

  const langFolder = LANGUAGE_FOLDERS[language];
  const trainerNames = createLabelMap(getMessageTree(commonTrees, langTrees, `${langFolder}_dp_trainers_name`));
  const trainerTypes = createLabelMap(getMessageTree(commonTrees, langTrees, `${langFolder}_dp_trainers_type`));
  const speciesTexts = createLabelMap(getMessageTree(commonTrees, langTrees, `${langFolder}_ss_monsname`));
  const moveTexts = createLabelMap(getMessageTree(commonTrees, langTrees, `${langFolder}_ss_wazaname`));
  const itemTexts = createLabelMap(getMessageTree(commonTrees, langTrees, `${langFolder}_ss_itemname`));
  const abilityTexts = createLabelMap(getMessageTree(commonTrees, langTrees, `${langFolder}_ss_tokusei`));
  const natureTexts = createLabelMap(getMessageTree(commonTrees, langTrees, `${langFolder}_ss_seikaku`));
  const typeTexts = createLabelMap(getMessageTree(commonTrees, langTrees, `${langFolder}_ss_typename`));

  reportProgress(options, 86, 'texts', 'Construction des textes et index');
  const typeEntries = buildTypeEntries(typeTexts);
  const typeNameById = new Map(typeEntries.map(entry => [entry.id, entry.name]));

  const { natureEntries, natureById } = buildNatureEntries(natureTexts);
  const { abilityEntries, abilityById } = buildAbilityEntries(abilityTexts);
  const { itemEntries, itemById } = buildItemEntries(itemTable.Item || [], itemTexts);
  const { trainerTypes: trainerTypeEntries, trainerTypeById } = buildTrainerTypeEntries(trainerTable.TrainerType || [], trainerTypes);
  const { speciesEntries, speciesByKey } = createSpeciesEntries(personalTable.Personal || [], speciesTexts, typeNameById);
  const { moveEntries, moveById } = createMoveEntries(moveTable.Waza || [], moveTexts, typeNameById, battleDataTable.BattleWazaData || []);

  const { profile, variant } = guessProfileAndVariant(options.topFolderName || options.sourceFile || '');
  reportProgress(options, 92, 'trainers', 'Assemblage des équipes dresseur');
  const trainers = createTrainerEntries(
    trainerTable.TrainerData || [],
    trainerTable.TrainerPoke || [],
    {
      speciesByKey,
      moveById,
      itemById,
      abilityById,
      natureById,
      learnsetRows: learnsetTable.WazaOboe || [],
    },
    trainerNames,
    trainerTypeById,
  );
  const inferredProfile = inferParsedProfile(profile, trainers, options.topFolderName || options.sourceFile || '');

  const versionCode = variant === 'pearl' ? 'SP' : 'BD';
  const game = inferredProfile.profile === 'luminescent'
    ? (variant === 'pearl' ? 'luminescentpearl' : 'luminescentdiamond')
    : (variant === 'pearl' ? 'shiningpearl' : 'brilliantdiamond');

  reportProgress(options, 97, 'finalize', 'Finalisation du dataset');

  return {
    meta: {
      sourceFile: options.sourceFile || options.topFolderName || `Custom ${inferredProfile.profile} ${versionCode}`,
      title: inferredProfile.profile === 'luminescent' ? 'Luminescent Platinum' : `Pokémon ${versionCode} remake`,
      productCode: inferredProfile.profile === 'luminescent' ? `LUMI-${versionCode}` : `BDSP-${versionCode}`,
      titleId: inferredProfile.profile === 'luminescent' ? `luminescent-${versionCode}` : `bdsp-${versionCode}`,
      idCode: inferredProfile.profile === 'luminescent' ? `LUMI-${versionCode}` : `BDSP-${versionCode}`,
      game,
      family: 'gen8',
      language,
      regions: [versionCode.toLowerCase()],
      trainerCount: trainers.length,
      modLoader: 'unityfs-browser',
      variant: versionCode,
      extractedFrom: options.topFolderName || options.sourceFile || '',
      detection: 'custom-parser',
      detectionReason: inferredProfile.reason,
    },
    trainers,
    speciesEntries,
    moveEntries,
    itemEntries,
    abilityEntries,
    trainerTypes: trainerTypeEntries,
    typeEntries,
    natureEntries,
  };
}

export function getBdspCustomRequiredPaths(preferredLanguage = 'fr') {
  const language = preferredLanguage === 'en' ? 'en' : 'fr';
  return [...REQUIRED_PATHS, LANGUAGE_SUFFIXES[language], LANGUAGE_SUFFIXES[language === 'fr' ? 'en' : 'fr']];
}
