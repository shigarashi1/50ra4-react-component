import { object2Lookups } from '50ra4-library';

export const FRUIT_ID = {
  Strawberry: '1',
  Melon: '2',
  Grapes: '3',
  Cherry: '4',
} as const;

export const FRUIT_NAME_MASTER = {
  [FRUIT_ID.Strawberry]: { jp: '苺', en: 'Strawberry' },
  [FRUIT_ID.Melon]: { jp: '🍈', en: 'Melon' },
  [FRUIT_ID.Grapes]: { jp: '葡萄', en: 'Grapes' },
  [FRUIT_ID.Cherry]: { jp: 'さくらんぼ', en: 'Cherry' },
} as const;

export const COLOR_CODE = {
  Red: '1',
  Green: '2',
  Purple: '3',
} as const;

export const COLOR_NAME_MASTER = {
  [COLOR_CODE.Red]: { jp: '赤', en: 'Red' },
  [COLOR_CODE.Green]: { jp: '緑', en: 'Green' },
  [COLOR_CODE.Purple]: { jp: '紫', en: 'Purple' },
} as const;

type ColorCode = typeof COLOR_CODE[keyof typeof COLOR_CODE];

export type FruitData = {
  id: string;
  name: string;
  weight: number;
  color: ColorCode;
};

export const FRUIT_DATA: FruitData[] = [
  {
    id: FRUIT_ID.Strawberry,
    name: '苺',
    weight: 20,
    color: COLOR_CODE.Red,
  },
  {
    id: FRUIT_ID.Melon,
    name: 'メロン',
    weight: 1000,
    color: COLOR_CODE.Green,
  },
  {
    id: FRUIT_ID.Grapes,
    name: '葡萄',
    weight: 300,
    color: COLOR_CODE.Purple,
  },
  {
    id: FRUIT_ID.Cherry,
    name: 'さくらんぼ',
    weight: 10,
    color: COLOR_CODE.Red,
  },
];

export const FRUIT_LOOKUPS = object2Lookups<FruitData>('id', 'name')(FRUIT_DATA);
