/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { StoryFn } from '@storybook/addons';
import { Provider as ReduxProvider } from 'react-redux';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { SnackbarProvider } from 'notistack';
import { combineReducers, compose, createStore, StoreCreator } from '@reduxjs/toolkit';
import { DialogProvider } from '../providers';
import { $50ra4ReactComponentReducers, $50RA4_REACT_COMPONENT_REDUCER_KEY } from '../store';

export type StoryMetaDecorator = (storyFn: StoryFn<any>) => JSX.Element;
type StoryMetaParameter<T> = Omit<Meta<T>, 'component' | 'decorators'> & { decorators?: StoryMetaDecorator[] };

export const createStoryMeta = <T extends React.FC<any>>(
  Component: T,
  parameter: StoryMetaParameter<ComponentProps<typeof Component>>,
): Meta => ({
  ...parameter,
  component: Component,
});

export const createStoryTemplate = <T extends React.FC<any>>(Component: T): Story<ComponentProps<typeof Component>> => (
  args,
) => <Component {...args} />;

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const voidFunction = (...args: ReadonlyArray<any>) => {};

// enhance
const enhancers = compose(
  (window as any).__REDUX_DEVTOOLS_EXTENSION__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    : (f: StoreCreator) => f,
);

const rootReducer = combineReducers({ [$50RA4_REACT_COMPONENT_REDUCER_KEY]: $50ra4ReactComponentReducers });
const configureStore = (initialState: any) => {
  const store = createStore(rootReducer, initialState, enhancers);
  return store;
};
const store = configureStore({});
export const withReduxProvider: StoryMetaDecorator = (storyFn: StoryFn<any>) => {
  return <ReduxProvider store={store}>{storyFn()}</ReduxProvider>;
};
export const withDatePickerUtilsProvider: StoryMetaDecorator = (storyFn) => {
  return <MuiPickersUtilsProvider utils={DateFnsUtils}>{storyFn()}</MuiPickersUtilsProvider>;
};
export const withSnackbarProvider: StoryMetaDecorator = (storyFn) => {
  return (
    <ReduxProvider store={store}>
      <SnackbarProvider maxSnack={5} preventDuplicate={false}>
        {storyFn()}
      </SnackbarProvider>
    </ReduxProvider>
  );
};
export const withDialogProvider: StoryMetaDecorator = (storyFn) => {
  return (
    <ReduxProvider store={store}>
      <DialogProvider>{storyFn()}</DialogProvider>
    </ReduxProvider>
  );
};
