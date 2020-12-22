import React from 'react';
import parseISO from 'date-fns/parseISO';

import { WithLabel } from './WithLabel';
import {
  createStoryMeta,
  createStoryTemplate,
  voidFunction,
  withDatePickerUtilsProvider,
  withReduxProvider,
} from '../../../utils/storybook';
import { InputDate } from '../../atoms';

const Component = WithLabel;

export default createStoryMeta(Component, {
  title: 'Molecules/WithLabel',
  decorators: [withReduxProvider, withDatePickerUtilsProvider],
});

const Template = createStoryTemplate(Component);

export const Default = Template.bind({});
Default.args = {
  label: { jp: 'サンプル', en: 'Sample' },
  children: <InputDate value={parseISO('2020-11-07')} onChange={voidFunction} />,
};
