import React from 'react';
import Button from '@material-ui/core/Button';

import { createStoryMeta, createStoryTemplate, withDialogProvider } from '../../../../utils/storybook';
import { InfoDialog as InfoDialogProps } from '../../../../types';
import { useDispatch } from 'react-redux';
import { showInfoDialog } from '../../../../store';

type Props = InfoDialogProps;
const Component: React.FC<Props> = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  const onClick = () => showInfoDialog(dispatch)(rest);
  return (
    <>
      <Button onClick={onClick}>show dialog</Button>
    </>
  );
};

export default createStoryMeta(Component, {
  title: 'Organisms/dialogs/InfoDialog',
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
};

const Template = createStoryTemplate(Component);

export const Default = Template.bind({});
Default.args = {
  ...DefaultProps,
};
