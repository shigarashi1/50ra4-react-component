import { stringArray2EnumLikeObject } from '50ra4-library';
import { OptionsObject } from 'notistack';

export const ELanguageCode = stringArray2EnumLikeObject(['jp', 'en']);
export type LanguageCode = keyof typeof ELanguageCode;
type RequiredLangCode = typeof ELanguageCode.jp;
export type I18nObj = Record<RequiredLangCode, string> &
  Partial<Record<Exclude<LanguageCode, RequiredLangCode>, string>>;

type PickedNotifierOptionKey =
  | 'id'
  | 'key'
  | 'persist'
  | 'variant'
  | 'preventDuplicate'
  | 'content'
  | 'action'
  | 'anchorOrigin'
  | 'autoHideDuration'
  | 'onClose';
type NotifierOption = Pick<OptionsObject, PickedNotifierOptionKey>;
export type Notifier = {
  id: string;
  message: string;
  hasDismissed: boolean;
  createdAt: string;
  option?: NotifierOption;
};
