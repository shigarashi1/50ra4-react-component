import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';

import { createStoryMeta, createStoryTemplate, withDialogProvider, voidFunction } from '../../../../utils/storybook';
import { SelectDialog as SelectDialogProps } from '../../../../types';
import { showSelectDialog } from '../../../../store';

type Props = SelectDialogProps;
const Component: React.FC<Props> = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  const onClick = () => showSelectDialog(dispatch)(rest);
  return (
    <>
      <Button onClick={onClick}>show dialog</Button>
    </>
  );
};

export default createStoryMeta(Component, {
  title: 'Organisms/dialogs/SelectDialog',
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
  onClickYes: voidFunction,
  onClickNo: voidFunction,
  onClickClose: voidFunction,
};

const Template = createStoryTemplate(Component);

export const Default = Template.bind({});
Default.args = {
  ...DefaultProps,
};
