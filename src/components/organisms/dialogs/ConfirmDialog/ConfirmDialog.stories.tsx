import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';

import { createStoryMeta, createStoryTemplate, withDialogProvider, voidFunction } from '../../../../utils/storybook';
import { ConfirmDialog as ConfirmDialogProps } from '../../../../types';
import { showConfirmDialog } from '../../../../store';

type Props = ConfirmDialogProps;
const Component: React.FC<Props> = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  const onClick = () => showConfirmDialog(dispatch)(rest);
  return (
    <>
      <Button onClick={onClick}>show dialog</Button>
    </>
  );
};

export default createStoryMeta(Component, {
  title: 'Organisms/dialogs/ConfirmDialog',
  decorators: [withDialogProvider],
});
const DefaultProps: Partial<Props> = {
  title: {
    jp: '果物一覧',
    en: 'Fruit List',
  },
  contexts: {
    jp: 'イチゴ<br/>メロン\nぶどう\nさくらんぼ\nは果物です。',
    en: 'Strawberry<br/>Melon\nGrapes<br/>Cherry\nare fruits.',
  },
  onClickOK: voidFunction,
  onClickCancel: voidFunction,
  onClickClose: voidFunction,
};

const Template = createStoryTemplate(Component);

export const Default = Template.bind({});
Default.args = {
  ...DefaultProps,
};
