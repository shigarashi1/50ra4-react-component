import React, { ComponentProps } from 'react';
import { useLanguageCode } from '../hooks/useLanguageCode';
import { WithLanguageCodeProps } from '../types';

export const withLanguageCode = <T extends WithLanguageCodeProps>(
  Component: React.FC<T>,
): React.FC<Omit<T, keyof WithLanguageCodeProps>> => {
  return (props) => {
    const { languageCode } = useLanguageCode();
    const componentProps = props as ComponentProps<typeof Component>;
    return <Component {...componentProps} languageCode={languageCode} />;
  };
};
