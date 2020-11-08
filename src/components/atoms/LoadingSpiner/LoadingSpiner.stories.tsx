import { ComponentProps } from 'react';

import { LoadingSpiner } from './LoadingSpiner';
import { createStoryMeta, createStoryTemplate } from '../../../utils/storybook';

const Component = LoadingSpiner;
type Props = ComponentProps<typeof Component>;

export default createStoryMeta(Component, { title: 'Atoms/LoadingSpiner' });
const DefaultProps: Partial<Props> = {
  isLoading: false,
};

const Template = createStoryTemplate(LoadingSpiner);

export const Default = Template.bind({});
Default.args = {
  ...DefaultProps,
};
