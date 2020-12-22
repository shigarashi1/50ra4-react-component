import { createSelector } from '@reduxjs/toolkit';
import { With$50ra4ReactComponentStateProps, $50RA4_REACT_COMPONENT_REDUCER_KEY } from '../store';

const stateSelector = <S extends With$50ra4ReactComponentStateProps, T>(
  selector: (state: S[typeof $50RA4_REACT_COMPONENT_REDUCER_KEY]) => T,
) => createSelector((state: S) => state[$50RA4_REACT_COMPONENT_REDUCER_KEY], selector);

export const languageCodeSelector = stateSelector((state) => state.language.languageCode);
export const notifierSelector = stateSelector((state) => state.notifier);
export const infoDialogSelector = stateSelector((state) => state.infoDialog);
export const confirmDialogSelector = stateSelector((state) => state.confirmDialog);
export const selectDialogSelector = stateSelector((state) => state.selectDialog);
