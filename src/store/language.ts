import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LanguageCode, ELanguageCode } from '../types';

type TState = { languageCode: LanguageCode };
const initialState: TState = { languageCode: ELanguageCode.jp };

export const languageModule = createSlice({
  name: '[50ra4-react-component/language]',
  initialState: initialState,
  reducers: {
    changeLanguage: (state: TState, action: PayloadAction<LanguageCode>) => {
      return { ...state, languageCode: action.payload };
    },
  },
});
