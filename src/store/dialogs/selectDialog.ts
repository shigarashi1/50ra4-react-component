import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SelectDialog } from '../../types';

const initialState: SelectDialog = {
  isShown: false,
  onClickClose: undefined,
  title: undefined,
  contexts: undefined,
  onClickYes: undefined,
  onClickNo: undefined,
};

export const selectDialogModule = createSlice({
  name: '[50ra4-react-component/dialogs/selectDialog]',
  initialState: initialState,
  reducers: {
    show: (state: SelectDialog, action: PayloadAction<Omit<SelectDialog, 'isShown'>>) => {
      return { ...state, isShown: true, ...action.payload };
    },
    close: (state: SelectDialog, action: PayloadAction<void>) => {
      return { ...state, ...initialState };
    },
  },
});
