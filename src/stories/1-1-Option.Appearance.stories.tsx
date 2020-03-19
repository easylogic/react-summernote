import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs} from "@storybook/addon-knobs";


export { SummernoteColorsOption } from './option/colors';
export { SummernoteStyleTags } from './option/styleTags';
export { SummernoteFontNames } from './option/fontNames';
export { SummernoteFontSizeUnits } from './option/fontSizeUnits';
export { SummernoteLineHeights } from './option/lineHeights';
export { SummernoteTableClassName } from './option/tableClassName';
export { SummernotePlaceholder } from './option/placeholder';
export { SummernoteHeightOption } from './option/height';

export default {
  title: 'Option/Appearance',
  component: ReactSummernoteLite,
  decorators: [withKnobs] // 애드온 적용
};