import { shallowEqual, useSelector } from 'react-redux';
import { languageCodeSelector } from '../selectors';

export const useLanguageCode = () => {
  const languageCode = useSelector(languageCodeSelector, shallowEqual);
  return { languageCode };
};
