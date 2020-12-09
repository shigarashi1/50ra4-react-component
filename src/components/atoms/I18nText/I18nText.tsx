import React, { useMemo } from 'react';
import { withLanguageCode } from '../../../containers';

import { I18nObj, LanguageCode } from '../../../types';

type Props = {
  languageCode: LanguageCode;
  i18nObj: I18nObj;
};

const InitialObj: I18nObj = {
  jp: 'unknown text',
  en: 'unknown text',
};

export const I18nText: React.FC<Props> = ({ languageCode, i18nObj = InitialObj }) => {
  const text = useMemo(() => i18nObj[languageCode] ?? '', [i18nObj, languageCode]);
  return <>{text}</>;
};

export const I18nTextContainer = withLanguageCode(I18nText);
