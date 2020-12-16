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
import { infoDialogModule, confirmDialogModule, selectDialogModule } from './dialogs';
import { languageModule } from './language';
import { notifierModule } from './notifier';

const reducers = {
  language: languageModule.reducer,
  notifier: notifierModule.reducer,
  infoDialog: infoDialogModule.reducer,
  confirmDialog: confirmDialogModule.reducer,
  selectDialog: selectDialogModule.reducer,
};

export const s50ra4ReactComponentReducers = combineReducers(reducers);
export const $50RA4_REACT_COMPONENT_REDUCER_KEY = '50ra4-react-component';
export type $50ra4ReactComponentState = Pick<ReturnType<typeof s50ra4ReactComponentReducers>, keyof typeof reducers>;
export type $50ra4ReactComponentExtendsState = { [$50RA4_REACT_COMPONENT_REDUCER_KEY]: $50ra4ReactComponentState };

// enhance
const isProduction = process.env.NODE_ENV === 'production';
const enhancers = compose(
  !isProduction && (window as any).__REDUX_DEVTOOLS_EXTENSION__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    : (f: StoreCreator) => f,
);

const rootReducer = combineReducers({ [$50RA4_REACT_COMPONENT_REDUCER_KEY]: s50ra4ReactComponentReducers });
export const __configureStore = (initialState: any) => {
  const store = createStore(rootReducer, initialState, enhancers);
  return store;
};

export const dispatcher = <P, T extends string>(action: ActionCreatorWithPayload<P, T>) => (
  dispatch: Dispatch<any>,
) => (...args: Parameters<typeof action>) => {
  dispatch(action(...args));
};
export const stateSelector = <S extends $50ra4ReactComponentExtendsState, T>(
  selector: (state: S[typeof $50RA4_REACT_COMPONENT_REDUCER_KEY]) => T,
) => createSelector((state: S) => state[$50RA4_REACT_COMPONENT_REDUCER_KEY], selector);

export const changeLanguageCode = dispatcher(languageModule.actions.changeLanguage);
export const languageCodeSelector = stateSelector((state) => state.language.languageCode);

export const enqueueSnackbar = dispatcher(notifierModule.actions.enqueue);
export const dismissSnackbar = dispatcher(notifierModule.actions.dismiss);
export const notifierSelector = stateSelector((state) => state.notifier);

export const showInfoDialog = dispatcher(infoDialogModule.actions.show);
export const closeInfoDialog = dispatcher(infoDialogModule.actions.close);
export const infoDialogSelector = stateSelector((state) => state.infoDialog);

export const showConfirmDialog = dispatcher(confirmDialogModule.actions.show);
export const closeConfirmDialog = dispatcher(confirmDialogModule.actions.close);
export const confirmDialogSelector = stateSelector((state) => state.confirmDialog);

export const showSelectDialog = dispatcher(selectDialogModule.actions.show);
export const closeSelectDialog = dispatcher(selectDialogModule.actions.close);
export const selectDialogSelector = stateSelector((state) => state.selectDialog);
