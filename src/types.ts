import { stringArray2EnumLikeObject } from '50ra4-library';

export const ELangCode = stringArray2EnumLikeObject(['jp', 'en']);
export type LangCode = keyof typeof ELangCode;
type RequiredLangCode = typeof ELangCode.jp;
export type I18nObj = Record<RequiredLangCode, string> & Partial<Record<Exclude<LangCode, RequiredLangCode>, string>>;
