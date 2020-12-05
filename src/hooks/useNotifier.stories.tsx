import React from 'react';
import Button from '@material-ui/core/Button';

import { useNotifier } from './useNotifier';
import { createStoryMeta, createStoryTemplate, withReduxProvider, withSnackbarProvider } from '../utils/storybook';
import { Notifier } from '../types';

type Props = Pick<Notifier, 'message' | 'option'>;
const Component: React.FC<Props> = ({ children, ...rest }) => {
  const { __enqueueSnackbar: enqueueSnackbar } = useNotifier();
  const onEnqueue = () => {
    enqueueSnackbar(rest);
  };
  return <Button onClick={onEnqueue}>show snackbar</Button>;
};

export default createStoryMeta(Component, {
  title: 'Hooks/useNotifier',
  decorators: [withSnackbarProvider, withReduxProvider],
});

const Template = createStoryTemplate(Component);
export const Default = Template.bind({});
Default.args = {
  message: 'sample',
  option: {
    variant: 'info',
  },
};
