import React from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';

import { createStoryMeta, createStoryTemplate, withSnackbarProvider } from '../utils/storybook';
import { Notifier } from '../types';
import { enqueueSnackbar } from '../events';

type Props = Pick<Notifier, 'message' | 'option'>;
const Component: React.FC<Props> = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  const onEnqueue = () => {
    enqueueSnackbar(dispatch)(rest);
  };
  return <Button onClick={onEnqueue}>show snackbar</Button>;
};

export default createStoryMeta(Component, {
  title: 'Providers/NotifierProvider',
  decorators: [withSnackbarProvider],
});

const Template = createStoryTemplate(Component);
export const Default = Template.bind({});
Default.args = {
  message: 'sample',
  option: {
    variant: 'info',
  },
};
