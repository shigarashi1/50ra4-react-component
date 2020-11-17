/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { StoryFn } from '@storybook/addons';
import { Provider as ReduxProvider } from 'react-redux';
import { __configureStore } from '../store';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

type StoryMetaDecorator = (storyFn: StoryFn<any>) => JSX.Element;
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

const store = __configureStore({});
export const withReduxProvider: StoryMetaDecorator = (storyFn: StoryFn<any>) => {
  return <ReduxProvider store={store}>{storyFn()}</ReduxProvider>;
};
export const withDatePickerUtilsProvider: StoryMetaDecorator = (storyFn) => {
  return <MuiPickersUtilsProvider utils={DateFnsUtils}>{storyFn()}</MuiPickersUtilsProvider>;
};
