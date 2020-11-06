/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

type StoryMetaParameter = Omit<Meta, 'component'>;

export const createStoryMeta = <T extends React.FC>(Component: T, params: StoryMetaParameter): Meta => ({
  ...params,
  component: Component,
});

export const createStoryTemplate = <T extends React.FC<any>>(Component: T): Story<ComponentProps<typeof Component>> => (
  args,
) => <Component {...args} />;
