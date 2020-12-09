import React, { ComponentProps } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { languageCodeSelector } from '../store';
import { LanguageCode } from '../types';

type WithLanguageCodeProps = {
  languageCode: LanguageCode;
};

export const withLanguageCode = <T extends WithLanguageCodeProps>(
  Component: React.FC<T>,
): React.FC<Omit<T, keyof WithLanguageCodeProps>> => {
  return (props) => {
    const languageCode = useSelector(languageCodeSelector, shallowEqual);
    const componentProps = props as ComponentProps<typeof Component>;
    return <Component {...componentProps} languageCode={languageCode} />;
  };
};
