import { createStoryMeta, createStoryTemplate, withReduxProvider } from '../../../utils/storybook';
import { LanguageSelect } from './LanguageSelect';

export default createStoryMeta(LanguageSelect, { title: 'Others/LanguageSelect', decorators: [withReduxProvider] });

const Template = createStoryTemplate(LanguageSelect);

export const Default = Template.bind({});
Default.args = {};

export const Column = Template.bind({});
Column.args = {
  isRow: false,
};
