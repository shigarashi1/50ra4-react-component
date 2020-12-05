/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ActionCreatorWithPayload,
  combineReducers,
  compose,
  createSelector,
  createStore,
  Dispatch,
  StoreCreator,
} from '@reduxjs/toolkit';
import { languageModule } from './language';
import { notifierModule } from './notifier';

const reducers = {
  language: languageModule.reducer,
  notifier: notifierModule.reducer,
};

export const s50ra4ReactComponentReducers = combineReducers(reducers);
export const S_50RA4_REACT_COMPONENT_REDUCER_KEY = '50ra4-react-component';
type State = Pick<ReturnType<typeof s50ra4ReactComponentReducers>, keyof typeof reducers>;

const rootReducer = combineReducers({ [S_50RA4_REACT_COMPONENT_REDUCER_KEY]: s50ra4ReactComponentReducers });
type AppState = { [S_50RA4_REACT_COMPONENT_REDUCER_KEY]: State };

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

export const dispatcher = <P, T extends string>(action: ActionCreatorWithPayload<P, T>) => (
  dispatch: Dispatch<any>,
) => (...args: Parameters<typeof action>) => {
  dispatch(action(...args));
};
export const stateSelector = <S extends AppState, T>(
  selector: (state: S[typeof S_50RA4_REACT_COMPONENT_REDUCER_KEY]) => T,
) => createSelector((state: S) => state[S_50RA4_REACT_COMPONENT_REDUCER_KEY], selector);

export const changeLanguageCode = dispatcher(languageModule.actions.changeLanguage);
export const languageCodeSelector = stateSelector((state) => state.language.languageCode);

export const enqueueSnackbar = dispatcher(notifierModule.actions.enqueue);
export const dismissSnackbar = dispatcher(notifierModule.actions.dismiss);
export const notifierSelector = stateSelector((state) => state.notifier);
