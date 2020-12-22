import { ActionCreatorWithPayload, Dispatch } from '@reduxjs/toolkit';
import { languageModule, notifierModule, infoDialogModule, confirmDialogModule, selectDialogModule } from '../store';

export const actionDispatcher = <P, T extends string>(action: ActionCreatorWithPayload<P, T>) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: Dispatch<any>,
) => (...args: Parameters<typeof action>) => {
  dispatch(action(...args));
};

export const changeLanguageCode = actionDispatcher(languageModule.actions.changeLanguage);

export const enqueueSnackbar = actionDispatcher(notifierModule.actions.enqueue);
export const dismissSnackbar = actionDispatcher(notifierModule.actions.dismiss);

export const showInfoDialog = actionDispatcher(infoDialogModule.actions.show);
export const closeInfoDialog = actionDispatcher(infoDialogModule.actions.close);

export const showConfirmDialog = actionDispatcher(confirmDialogModule.actions.show);
export const closeConfirmDialog = actionDispatcher(confirmDialogModule.actions.close);

export const showSelectDialog = actionDispatcher(selectDialogModule.actions.show);
export const closeSelectDialog = actionDispatcher(selectDialogModule.actions.close);
