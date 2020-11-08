/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { StoryFn } from '@storybook/addons';
import { Provider as ReduxProvider } from 'react-redux';
import { __configureStore } from '../store';

type StoryMetaDecorator = (storyFn: StoryFn<any>) => JSX.Element;
type StoryMetaParameter = Omit<Meta, 'component' | 'decorators'> & { decorators?: StoryMetaDecorator[] };

export const createStoryMeta = <T extends React.FC<any>>(Component: T, params: StoryMetaParameter): Meta => ({
  ...params,
  component: Component,
});

export const createStoryTemplate = <T extends React.FC<any>>(Component: T): Story<ComponentProps<typeof Component>> => (
  args,
) => <Component {...args} />;

export const voidFunction = (...args: ReadonlyArray<any>) => {};

const store = __configureStore({});
export const withReduxProvider = (storyFn: StoryFn<any>) => {
  return <ReduxProvider store={store}>{storyFn()}</ReduxProvider>;
};
