import { I18nObj, LanguageCode } from '../types';

export const i18nObj2string = (languageCode: LanguageCode, i18nObj?: I18nObj): string =>
  i18nObj ? i18nObj[languageCode] ?? '' : '';

const LINE_FEED_STRINGS = ['<br/>', '\n'];
export const splitByLineFeedStrings = (str: string): string[] =>
  LINE_FEED_STRINGS.reduce((acc, separator) => acc.map((s) => s.split(separator)).flat(), [str]);
