import React from 'react';
import { ComponentProps } from 'react';

import { LoadingSpinner } from './LoadingSpinner';
import { createStoryMeta, createStoryTemplate, StoryMetaDecorator } from '../../../utils/storybook';
import styled from 'styled-components';

const Component = LoadingSpinner;
type Props = ComponentProps<typeof Component>;

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
`;

const withWrapper: StoryMetaDecorator = (storyFn) => {
  return <Wrapper>{storyFn()}</Wrapper>;
};

export default createStoryMeta(Component, { title: 'Atoms/LoadingSpinner', decorators: [withWrapper] });
const DefaultProps: Partial<Props> = {
  isAbsolute: false,
  size: 100,
};

const Template = createStoryTemplate(LoadingSpinner);

export const Default = Template.bind({});
Default.args = {
  ...DefaultProps,
};
