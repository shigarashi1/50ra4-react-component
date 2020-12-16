import { stringArray2EnumLikeObject } from '50ra4-library';
import { OptionsObject } from 'notistack';

export const ELanguageCode = stringArray2EnumLikeObject(['jp', 'en']);
export type LanguageCode = keyof typeof ELanguageCode;
type RequiredLangCode = typeof ELanguageCode.jp;
export type I18nObj = Record<RequiredLangCode, string> &
  Partial<Record<Exclude<LanguageCode, RequiredLangCode>, string>>;
export type WithLanguageCodeProps = {
  languageCode: LanguageCode;
};

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

export type DialogAction = 'onClickClose' | 'onClickOK' | 'onClickCancel' | 'onClickYes' | 'onClickNo';
export type BaseDialog<Actions extends DialogAction> = {
  isShown: boolean;
  title?: I18nObj;
  contexts?: I18nObj;
} & { [K in Extract<DialogAction, Actions>]?: () => void };
export type InfoDialog = BaseDialog<'onClickClose' | 'onClickOK'>;
export type ConfirmDialog = BaseDialog<'onClickClose' | 'onClickOK' | 'onClickCancel'>;
export type SelectDialog = BaseDialog<'onClickClose' | 'onClickYes' | 'onClickNo'>;
