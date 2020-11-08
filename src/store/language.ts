import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LangCode, ELangCode } from '../types';

type TState = { langCode: LangCode };
const initialState: TState = { langCode: ELangCode.jp };

export const languageModule = createSlice({
  name: '[50ra4-react-component/language]',
  initialState: initialState,
  reducers: {
    changeLanguage: (state: TState, action: PayloadAction<LangCode>) => {
      return { ...state, langCode: action.payload };
    },
  },
});
