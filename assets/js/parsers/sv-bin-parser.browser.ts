import * as flatbuffers from 'flatbuffers';

import { BallType } from '../../../tmp_sv_schema/ball-type.ts';
import { GemType } from '../../../tmp_sv_schema/gem-type.ts';
import { ItemID } from '../../../tmp_sv_schema/item-id.ts';
import { PokeDataBattleT } from '../../../tmp_sv_schema/poke-data-battle.ts';
import { RareType } from '../../../tmp_sv_schema/rare-type.ts';
import { SeikakuType } from '../../../tmp_sv_schema/seikaku-type.ts';
import { SexType } from '../../../tmp_sv_schema/sex-type.ts';
import { SizeType } from '../../../tmp_sv_schema/size-type.ts';
import { TalentType } from '../../../tmp_sv_schema/talent-type.ts';
import { TokuseiType } from '../../../tmp_sv_schema/tokusei-type.ts';
import { TrdataMainArray } from '../../../tmp_sv_schema/trainer/trdata-main-array.ts';
import { BattleType } from '../../../tmp_sv_schema/trainer/battle-type.ts';
import { DataType } from '../../../tmp_sv_schema/trainer/data-type.ts';
import { WazaType } from '../../../tmp_sv_schema/waza-type.ts';
import { DevID } from '../../../tmp_sv_schema/pml/common/dev-id.ts';
import { WazaID } from '../../../tmp_sv_schema/pml/common/waza-id.ts';
import { PersonalTable } from '../../../tmp_sv_schema_personal/personal-table.ts';

type EnumLike = Record<string | number, string | number>;

function enumName(enumObj: EnumLike, value: number): string {
  return String(enumObj[value] ?? value);
}

function toByteBuffer(input: ArrayBuffer | Uint8Array): flatbuffers.ByteBuffer {
  const bytes = input instanceof Uint8Array ? input : new Uint8Array(input);
  return new flatbuffers.ByteBuffer(bytes);
}

function normalizeParamSet(param: any) {
  if (!param) {
    return { hp: 0, atk: 0, def: 0, spAtk: 0, spDef: 0, agi: 0 };
  }
  return {
    hp: Number(param.hp ?? 0),
    atk: Number(param.atk ?? 0),
    def: Number(param.def ?? 0),
    spAtk: Number(param.spAtk ?? 0),
    spDef: Number(param.spDef ?? 0),
    agi: Number(param.agi ?? 0),
  };
}

function normalizeBattleMon(mon: PokeDataBattleT | null) {
  if (!mon) {
    return {
      devId: 'DEV_NULL',
      formId: 0,
      sex: 'DEFAULT',
      item: 'ITEMID_NONE',
      level: 0,
      ballId: 'NONE',
      wazaType: 'DEFAULT',
      waza1: { wazaId: 'WAZA_NULL', pointUp: 0 },
      waza2: { wazaId: 'WAZA_NULL', pointUp: 0 },
      waza3: { wazaId: 'WAZA_NULL', pointUp: 0 },
      waza4: { wazaId: 'WAZA_NULL', pointUp: 0 },
      gemType: 'DEFAULT',
      seikaku: 'DEFAULT',
      tokusei: 'RANDOM_12',
      talentType: 'RANDOM',
      talentValue: normalizeParamSet(null),
      talentVnum: 0,
      effortValue: normalizeParamSet(null),
      rareType: 'NO_RARE',
      scaleType: 'VALUE',
      scaleValue: 0,
    };
  }
  const normalizeWazaSet = (waza: any) => ({
    wazaId: enumName(WazaID, Number(waza?.wazaId ?? 0)),
    pointUp: Number(waza?.pointUp ?? 0),
  });
  return {
    devId: enumName(DevID, Number(mon.devId ?? 0)),
    formId: Number(mon.formId ?? 0),
    sex: enumName(SexType, Number(mon.sex ?? 0)),
    item: enumName(ItemID, Number(mon.item ?? 0)),
    level: Number(mon.level ?? 0),
    ballId: enumName(BallType, Number(mon.ballId ?? 0)),
    wazaType: enumName(WazaType, Number(mon.wazaType ?? 0)),
    waza1: normalizeWazaSet(mon.waza1),
    waza2: normalizeWazaSet(mon.waza2),
    waza3: normalizeWazaSet(mon.waza3),
    waza4: normalizeWazaSet(mon.waza4),
    gemType: enumName(GemType, Number(mon.gemType ?? 0)),
    seikaku: enumName(SeikakuType, Number(mon.seikaku ?? 0)),
    tokusei: enumName(TokuseiType, Number(mon.tokusei ?? 0)),
    talentType: enumName(TalentType, Number(mon.talentType ?? 0)),
    talentValue: normalizeParamSet(mon.talentValue),
    talentVnum: Number(mon.talentVnum ?? 0),
    effortValue: normalizeParamSet(mon.effortValue),
    rareType: enumName(RareType, Number(mon.rareType ?? 0)),
    scaleType: enumName(SizeType, Number(mon.scaleType ?? 0)),
    scaleValue: Number(mon.scaleValue ?? 0),
  };
}

export function parseTrainersBinary(input: ArrayBuffer | Uint8Array) {
  const root = TrdataMainArray.getRootAsTrdataMainArray(toByteBuffer(input));
  const values = [];
  for (let index = 0; index < root.valuesLength(); index += 1) {
    const entry = root.values(index)?.unpack();
    if (!entry) continue;
    values.push({
      trid: String(entry.trid ?? ''),
      trNameLabel: String(entry.trNameLabel ?? ''),
      trainerType: String(entry.trainerType ?? ''),
      isStrong: Boolean(entry.isStrong),
      battleType: enumName(BattleType, Number(entry.battleType ?? 0)),
      dataType: enumName(DataType, Number(entry.dataType ?? 0)),
      moneyRate: Number(entry.moneyRate ?? 0),
      changeGem: Boolean(entry.changeGem),
      poke1: normalizeBattleMon(entry.poke1),
      poke2: normalizeBattleMon(entry.poke2),
      poke3: normalizeBattleMon(entry.poke3),
      poke4: normalizeBattleMon(entry.poke4),
      poke5: normalizeBattleMon(entry.poke5),
      poke6: normalizeBattleMon(entry.poke6),
      aiBasic: Boolean(entry.aiBasic),
      aiHigh: Boolean(entry.aiHigh),
      aiExpert: Boolean(entry.aiExpert),
      aiDouble: Boolean(entry.aiDouble),
      aiRaid: Boolean(entry.aiRaid),
      aiWeak: Boolean(entry.aiWeak),
      aiItem: Boolean(entry.aiItem),
      aiChange: Boolean(entry.aiChange),
      popupLabelNormal1: String(entry.popupLabelNormal1 ?? ''),
      popupLabelNormal2: String(entry.popupLabelNormal2 ?? ''),
      popupLabelPinch1: String(entry.popupLabelPinch1 ?? ''),
      popupLabelPinch2: String(entry.popupLabelPinch2 ?? ''),
    });
  }
  return { values };
}

export function parsePersonalBinary(input: ArrayBuffer | Uint8Array) {
  const root = PersonalTable.getRootAsPersonalTable(toByteBuffer(input));
  const entry = [];
  for (let index = 0; index < root.entryLength(); index += 1) {
    const personal = root.entry(index)?.unpack();
    if (!personal) continue;
    entry.push({
      species: {
        species: Number(personal.species?.species ?? 0),
        form: Number(personal.species?.form ?? 0),
        model: Number(personal.species?.model ?? 0),
        color: Number(personal.species?.color ?? 0),
        bodyType: Number(personal.species?.bodyType ?? 0),
        height: Number(personal.species?.height ?? 0),
        weight: Number(personal.species?.weight ?? 0),
        reserved: Number(personal.species?.reserved ?? 0),
        reserved1: Number(personal.species?.reserved1 ?? 0),
        reserved2: Number(personal.species?.reserved2 ?? 0),
      },
      is_present: Boolean(personal.isPresent),
      type_1: Number(personal.type1 ?? 0),
      type_2: Number(personal.type2 ?? 0),
      ability_1: Number(personal.ability1 ?? 0),
      ability_2: Number(personal.ability2 ?? 0),
      ability_3: Number(personal.ability3 ?? 0),
      base_stats: {
        hp: Number(personal.baseStats?.hp ?? 0),
        atk: Number(personal.baseStats?.atk ?? 0),
        def: Number(personal.baseStats?.def ?? 0),
        spa: Number(personal.baseStats?.spAtk ?? 0),
        spd: Number(personal.baseStats?.spDef ?? 0),
        spe: Number(personal.baseStats?.spd ?? 0),
      },
      levelup_moves: Array.isArray(personal.levelupMoves)
        ? personal.levelupMoves.map(move => ({
            move: Number(move?.move ?? 0),
            level: Number(move?.level ?? 0),
          }))
        : [],
    });
  }
  return { entry };
}
