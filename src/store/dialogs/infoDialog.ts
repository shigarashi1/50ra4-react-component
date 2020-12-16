import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InfoDialog } from '../../types';

const initialState: InfoDialog = {
  isShown: false,
  onClickClose: undefined,
  title: undefined,
  contexts: undefined,
  onClickOK: undefined,
};

export const infoDialogModule = createSlice({
  name: '[50ra4-react-component/dialogs/infoDialog]',
  initialState: initialState,
  reducers: {
    show: (state: InfoDialog, action: PayloadAction<Omit<InfoDialog, 'isShown'>>) => {
      return { ...state, isShown: true, ...action.payload };
    },
    close: (state: InfoDialog, action: PayloadAction<void>) => {
      return { ...state, ...initialState };
    },
  },
});
