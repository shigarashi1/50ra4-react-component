/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineReducers, compose, createSelector, createStore, Dispatch, StoreCreator } from '@reduxjs/toolkit';
import { LangCode } from '../types';
import { languageModule } from './language';

export const s50ra4ReactComponentReducers = combineReducers({
  language: languageModule.reducer,
});
export const S_50RA4_REACT_COMPONENT_REDUCER_KEY = '50ra4-react-component';

const rootReducer = combineReducers({ [S_50RA4_REACT_COMPONENT_REDUCER_KEY]: s50ra4ReactComponentReducers });
type AppState = ReturnType<typeof rootReducer>;

// enhance
const isProduction = process.env.NODE_ENV === 'production';
const enhancers = compose(
  !isProduction && (window as any).__REDUX_DEVTOOLS_EXTENSION__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    : (f: StoreCreator) => f,
);
export const __configureStore = (initialState: any) => {
  const store = createStore(rootReducer, initialState, enhancers);
  return store;
};

const s50ra4ReactComponentSelector = <T extends AppState>() => (appState: T) =>
  appState[S_50RA4_REACT_COMPONENT_REDUCER_KEY];

export const changeLangCode = (dispatch: Dispatch<any>) => (langcode: LangCode) => {
  dispatch(languageModule.actions.changeLanguage(langcode));
};
export const langCodeSelector = createSelector(s50ra4ReactComponentSelector(), (state) => state.language.langCode);
