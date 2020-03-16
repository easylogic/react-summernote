import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import 'jquery'
import 'summernote/dist/lang/summernote-ko-KR';
import { withKnobs} from "@storybook/addon-knobs";


export { SummernoteAirModeOption } from './option/airMode';
export { SummernoteHeightOption } from './option/height';
export { SummernoteFocusOption } from './option/focus';
export { SummernoteI18nOtherLanguage } from './option/lang';
export { SummernoteToolbar } from './option/toolbar';
export { SummernotePopover } from './option/popover';
export { SummernoteStyleTags } from './option/styleTags';
export { SummernoteBlockquoteBreakingLevel } from './option/blockquoteBreakingLevel';
export { SummernoteFontNames } from './option/fontNames';
export { SummernoteFontSizeUnits } from './option/fontSizeUnits';
export { SummernoteLineHeights } from './option/lineHeights';
export { SummernotePlaceholder } from './option/placeholder';
export { SummernoteDialogsInBody } from './option/dialogsInBody';
export { SummernoteDisableDragAndDrop } from './option/disableDragAndDrop';
export { SummernoteShortcuts } from './option/shortcuts';
export { SummernoteTabDisable } from './option/tabDisable';
export { SummernoteHintOption } from './option/hint';


export default {
  title: 'Option',
  component: ReactSummernoteLite,
  decorators: [withKnobs] // 애드온 적용
};