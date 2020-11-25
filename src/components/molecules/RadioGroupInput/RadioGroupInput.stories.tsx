import React, { ComponentProps, useCallback, useState } from 'react';
import { RadioGroupInput } from './RadioGroupInput';

import { createStoryMeta, createStoryTemplate, withReduxProvider } from '../../../utils/storybook';
import { Lookup } from '50ra4-library';

const FruitsIDs = {
  Strawberry: '1',
  Melon: '2',
  Grapes: '3',
  Cherry: '4',
} as const;

const LOOKUPS: Lookup[] = [
  { id: FruitsIDs.Strawberry, value: 'イチゴ' },
  { id: FruitsIDs.Melon, value: 'メロン' },
  { id: FruitsIDs.Grapes, value: 'ブドウ' },
  { id: FruitsIDs.Cherry, value: 'チェリー' },
];

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
  options: LOOKUPS,
};

const Template = createStoryTemplate(Component);

export const Default = Template.bind({});
Default.args = {
  ...DefaultProps,
};

export const WithLabels = Template.bind({});
WithLabels.args = {
  ...DefaultProps,
  labels: {
    [FruitsIDs.Strawberry]: { jp: '苺', en: 'Strawberry' },
    [FruitsIDs.Melon]: { jp: '🍈', en: 'Melon' },
    [FruitsIDs.Grapes]: { jp: '葡萄', en: 'Grapes' },
    [FruitsIDs.Cherry]: { jp: 'さくらんぼ', en: 'Cherry' },
  },
};

export const Columns = Template.bind({});
Columns.args = {
  ...DefaultProps,
  isRow: false,
};
