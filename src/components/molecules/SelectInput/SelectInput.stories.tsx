import React, { ComponentProps, useState } from 'react';
import { SelectInput } from './SelectInput';
import { createStoryMeta, createStoryTemplate, withReduxProvider } from '../../../utils/storybook';
import { FRUIT_LOOKUPS, FRUIT_NAME_MASTER, FRUIT_ID } from '../../../mocks';

type Props = ComponentProps<typeof SelectInput>;
const Component: React.FC<Props> = (props: Props) => {
  const [selectedId, setSelectedId] = useState<string | undefined>(props.selectedId);
  const onChange = (id: string | undefined) => {
    setSelectedId(id);
  };
  return <SelectInput {...props} selectedId={selectedId} onChange={onChange} />;
};

export default createStoryMeta(SelectInput, {
  title: 'Molecules/SelectInput',
  decorators: [withReduxProvider],
});
const DefaultProps: Partial<Props> = {
  name: 'SelectInput',
  ariaLabel: 'SelectInput',
  options: FRUIT_LOOKUPS,
  selectedId: FRUIT_ID.Grapes,
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
  optionLabels: FRUIT_NAME_MASTER,
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

export const Placeholder = Template.bind({});
Placeholder.args = {
  ...DefaultProps,
  label: { jp: 'ラベル', en: 'Label' },
  placeholder: { jp: '選択してください', en: 'Select' },
  optionLabels: FRUIT_NAME_MASTER,
  isRequired: true,
  selectedId: undefined,
};
