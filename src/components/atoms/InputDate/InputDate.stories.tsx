import { ComponentProps } from 'react';
import parseISO from 'date-fns/parseISO';
import { createStoryMeta, createStoryTemplate } from '../../../utils/storybook';
import { InputDate } from './InputDate';

export default createStoryMeta(InputDate, { title: 'Atoms/InputDate' });

type Props = ComponentProps<typeof InputDate>;
const DefaultProps: Props = {
  value: parseISO('2020-11-07'),
};

const Template = createStoryTemplate(InputDate);

export const Default = Template.bind({});
Default.args = {
  ...DefaultProps,
};

export const Label = Template.bind({});
Label.args = {
  ...DefaultProps,
  label: 'DatePicker',
};

export const Filled = Template.bind({});
Filled.args = {
  ...DefaultProps,
  inputVariant: 'filled',
};

export const Outlined = Template.bind({});
Outlined.args = {
  ...DefaultProps,
  inputVariant: 'outlined',
};
