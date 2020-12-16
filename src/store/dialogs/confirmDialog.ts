import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ConfirmDialog } from '../../types';

const initialState: ConfirmDialog = {
  isShown: false,
  onClickClose: undefined,
  title: undefined,
  contexts: undefined,
  onClickOK: undefined,
  onClickCancel: undefined,
};

export const confirmDialogModule = createSlice({
  name: '[50ra4-react-component/dialogs/confirmDialog]',
  initialState: initialState,
  reducers: {
    show: (state: ConfirmDialog, action: PayloadAction<Omit<ConfirmDialog, 'isShown'>>) => {
      return { ...state, isShown: true, ...action.payload };
    },
    close: (state: ConfirmDialog, action: PayloadAction<void>) => {
      return { ...state, ...initialState };
    },
  },
});
