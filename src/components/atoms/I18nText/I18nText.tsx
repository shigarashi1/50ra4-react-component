import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { langCodeSelector } from '../../../store';
import { I18nObj, LangCode } from '../../../types';

type Props = {
  langCode: LangCode;
  i18nObj: I18nObj;
};

const InitialObj: I18nObj = {
  jp: 'unknown text',
  en: 'unknown text',
};

export const I18nText: React.FC<Props> = ({ langCode, i18nObj = InitialObj }) => {
  const text = useMemo(() => i18nObj[langCode] || '', [i18nObj, langCode]);
  return <>{text}</>;
};

export const I18nTextContainer: React.FC<Omit<Props, 'langCode'>> = ({ ...props }) => {
  const langCode = useSelector(langCodeSelector);
  return <I18nText {...props} langCode={langCode} />;
};
