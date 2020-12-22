import React from 'react';
import { useDispatch } from 'react-redux';
import { ELanguageCode, I18nObj, LanguageCode } from '../../../types';
import { useLanguageCode } from '../../../hooks';
import { changeLanguageCode } from '../../../events';
import { RadioGroupInput } from '../../molecules';

type Props = {
  isRow?: boolean;
};

const RADIO_LABEL: Record<LanguageCode, I18nObj> = {
  [ELanguageCode.jp]: { jp: '日本語', en: 'JPN' },
  [ELanguageCode.en]: { jp: '英語', en: 'ENG' },
};

const LANGUAGE_LOOKUPS = [
  { id: ELanguageCode.jp, value: ELanguageCode.jp },
  { id: ELanguageCode.en, value: ELanguageCode.en },
];

export const LanguageSelect: React.FC<Props> = ({ isRow = true }) => {
  const dispatch = useDispatch();
  const { languageCode } = useLanguageCode();
  const changeLanguage = changeLanguageCode(dispatch);
  const onChange = (id: string) => {
    const code = LANGUAGE_LOOKUPS.find((v) => v.id === id)?.value || ELanguageCode.jp;
    changeLanguage(code);
  };
  return (
    <RadioGroupInput
      ariaLabel="LanguageSelect"
      selectedId={languageCode}
      options={LANGUAGE_LOOKUPS}
      radioLabels={RADIO_LABEL}
      onChange={onChange}
      isRow={isRow}
    />
  );
};
