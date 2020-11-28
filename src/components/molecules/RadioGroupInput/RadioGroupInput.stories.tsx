import React, { ComponentProps, useCallback, useState } from 'react';
import { RadioGroupInput } from './RadioGroupInput';
import { createStoryMeta, createStoryTemplate, withReduxProvider } from '../../../utils/storybook';
import { FRUIT_LOOKUPS, FRUIT_NAME_MASTER } from '../../../mocks';

type Props = ComponentProps<typeof RadioGroupInput>;
const Component: React.FC<Props> = (props: Props) => {
  const [selectedId, setSelectedId] = useState<string | undefined>('1');
  const onChange = useCallback((id: string | undefined) => {
    setSelectedId(id);
  }, []);
  return <RadioGroupInput {...props} selectedId={selectedId} onChange={onChange} />;
};

export default createStoryMeta(RadioGroupInput, {
  title: 'Molecules/RadioGroupInput',
  decorators: [withReduxProvider],
});
const DefaultProps: Partial<Props> = {
  name: 'RadioGroupInput',
  ariaLabel: 'RadioGroupInput',
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
  radioLabels: FRUIT_NAME_MASTER,
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
