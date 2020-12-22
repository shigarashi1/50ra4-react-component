import { combineReducers } from '@reduxjs/toolkit';
import { infoDialogModule, confirmDialogModule, selectDialogModule } from './dialogs';
import { languageModule } from './language';
import { notifierModule } from './notifier';

export { infoDialogModule, confirmDialogModule, selectDialogModule, languageModule, notifierModule };

const reducers = {
  language: languageModule.reducer,
  notifier: notifierModule.reducer,
  infoDialog: infoDialogModule.reducer,
  confirmDialog: confirmDialogModule.reducer,
  selectDialog: selectDialogModule.reducer,
};

export const $50ra4ReactComponentReducers = combineReducers(reducers);
export const $50RA4_REACT_COMPONENT_REDUCER_KEY = '$50ra4-react-component';
export type $50ra4ReactComponentState = Pick<ReturnType<typeof $50ra4ReactComponentReducers>, keyof typeof reducers>;
export type With50ra4ReactComponentStateProps = { [$50RA4_REACT_COMPONENT_REDUCER_KEY]: $50ra4ReactComponentState };
