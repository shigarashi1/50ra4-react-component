import React, { useState } from 'react';
import { ComponentProps } from 'react';

import { LoadingGuard } from './LoadingGuard';
import { createStoryMeta, createStoryTemplate } from '../../../utils/storybook';

type Props = ComponentProps<typeof LoadingGuard>;

const Component: React.FC<Props> = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const onClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };
  return (
    <LoadingGuard isLoading={isLoading}>
      <button onClick={onClick}>Start Loading</button>
    </LoadingGuard>
  );
};

export default createStoryMeta(Component, { title: 'Molecules/LoadingGuard' });
const DefaultProps: Partial<Props> = {
  isLoading: false,
};

const Template = createStoryTemplate(Component);

export const Default = Template.bind({});
Default.args = {
  ...DefaultProps,
};
