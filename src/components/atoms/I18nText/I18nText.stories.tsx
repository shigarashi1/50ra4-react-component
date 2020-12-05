import { ComponentProps } from 'react';

import { I18nText } from './I18nText';
import { createStoryMeta, createStoryTemplate } from '../../../utils/storybook';

const Component = I18nText;
type Props = ComponentProps<typeof Component>;

export default createStoryMeta(Component, { title: 'Atoms/I18nText' });
const DefaultProps: Partial<Props> = {
  languageCode: 'jp',
  i18nObj: { jp: 'サンプル', en: 'Sample' },
};

const Template = createStoryTemplate(Component);

export const Default = Template.bind({});
Default.args = {
  ...DefaultProps,
};

export const Japanese = Template.bind({});
Japanese.args = {
  ...DefaultProps,
};

export const English = Template.bind({});
English.args = {
  ...DefaultProps,
  languageCode: 'en',
};
