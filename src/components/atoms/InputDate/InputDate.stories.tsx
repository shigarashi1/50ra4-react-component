import { ComponentProps } from 'react';
import parseISO from 'date-fns/parseISO';

import { InputDate } from './InputDate';
import {
  createStoryMeta,
  createStoryTemplate,
  voidFunction,
  withDatePickerUtilsProvider,
} from '../../../utils/storybook';

type Props = ComponentProps<typeof InputDate>;
const DefaultProps: Props = {
  value: parseISO('2020-11-07'),
  onChange: voidFunction,
};

export default createStoryMeta(InputDate, {
  title: 'Atoms/InputDate',
  args: {
    ...DefaultProps,
  },
  decorators: [withDatePickerUtilsProvider],
});

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

export const Errors = Template.bind({});
Errors.args = {
  ...DefaultProps,
  error: true,
};
