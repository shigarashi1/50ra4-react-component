import React, { ComponentProps, useState } from 'react';
import { CheckboxGroupInput } from './CheckboxGroupInput';
import { createStoryMeta, createStoryTemplate, withReduxProvider } from '../../../utils/storybook';
import { FRUIT_LOOKUPS, FRUIT_NAME_MASTER } from '../../../mocks';

type Props = ComponentProps<typeof CheckboxGroupInput>;
const Component: React.FC<Props> = (props: Props) => {
  const [selectedIds, setSelectedIds] = useState<string[]>(['1', '3']);
  const onChange = (ids?: string[]) => {
    setSelectedIds(ids || []);
  };
  return <CheckboxGroupInput {...props} selectedIds={selectedIds} onChange={onChange} />;
};

export default createStoryMeta(CheckboxGroupInput, {
  title: 'Molecules/CheckboxGroupInput',
  decorators: [withReduxProvider],
});
const DefaultProps: Partial<Props> = {
  ariaLabel: 'CheckboxGroupInput',
  options: FRUIT_LOOKUPS,
};

const Template = createStoryTemplate(Component);

export const Default = Template.bind({});
Default.args = {
  ...DefaultProps,
};

export const WithLabels = Template.bind({});
WithLabels.args = {
  ...DefaultProps,
  label: { jp: 'ラベル', en: 'Label' },
  checkboxLabels: FRUIT_NAME_MASTER,
};

export const Columns = Template.bind({});
Columns.args = {
  ...DefaultProps,
  isRow: false,
};

export const Required = Template.bind({});
Required.args = {
  ...DefaultProps,
  label: { jp: '必須入力項目', en: 'Required Item' },
  isRequired: true,
};

export const Errors = Template.bind({});
Errors.args = {
  ...DefaultProps,
  label: { jp: 'エラー', en: 'error' },
  hasError: true,
  helperText: 'this is error sample.',
};
