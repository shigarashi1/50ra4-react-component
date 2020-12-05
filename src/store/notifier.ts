import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createId, formatDate } from '50ra4-library';

import { Notifier } from '../types';

type NotifierState = Notifier[];
const initialState: NotifierState = [];

type EnqueueParameter = Omit<Notifier, 'id' | 'hasDismissed' | 'createdAt'>;

export const notifierModule = createSlice({
  name: '[50ra4-react-component/notifier]',
  initialState: initialState,
  reducers: {
    enqueue: (state: NotifierState, action: PayloadAction<EnqueueParameter>) => {
      const notifierData = {
        id: createId(),
        hasDismissed: false,
        createdAt: formatDate.ISOString(new Date()),
        message: action.payload.message,
        option: action.payload.option,
      };
      return [...state, notifierData];
    },
    dismiss: (state: NotifierState, action: PayloadAction<string>) => {
      return state.map((data) => (data.id !== action.payload ? data : { ...data, hasDismissed: true }));
    },
  },
});
