import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from "@storybook/addon-knobs";


export { BackColorForeColorCommand } from './font-style-api/backColor.foreColor';
export { FontStyleCommand } from './font-style-api/fontStyle';
export { FontNameCommand } from './font-style-api/fontName';
export { FontSizeCommand } from './font-style-api/fontSize';
export { FontSizeUnitCommand } from './font-style-api/fontSizeUnit';
export { RemoveFormatCommand } from './font-style-api/removeFormat';
export { FontStyleAdvancedCommand } from './font-style-api/fontStyleAdvanced';

export default {
  title: 'API/Font Style API',
  component: ReactSummernoteLite,
  decorators: [withKnobs] // 애드온 적용
};
