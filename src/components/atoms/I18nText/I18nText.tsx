import React, { useMemo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { languageCodeSelector } from '../../../store';
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

export const I18nTextContainer: React.FC<Omit<Props, 'languageCode'>> = ({ ...props }) => {
  const languageCode = useSelector(languageCodeSelector, shallowEqual);
  return <I18nText {...props} languageCode={languageCode} />;
};
