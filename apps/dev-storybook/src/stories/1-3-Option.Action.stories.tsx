import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import 'jquery'
import 'summernote/dist/lang/summernote-ko-KR';
import { withKnobs} from "@storybook/addon-knobs";


export { SummernoteFocusOption } from './option/focus';
export { SummernoteBlockquoteBreakingLevel } from './option/blockquoteBreakingLevel';
export { SummernoteShortcuts } from './option/shortcuts';
export { SummernoteTabDisable } from './option/tabDisable';
export { SummernoteInsertTableMaxSize } from './option/insertTableMaxSize';
export { SummernoteDisableDragAndDrop } from './option/disableDragAndDrop';

export default {
  title: 'Option/Action',
  component: ReactSummernoteLite,
  decorators: [withKnobs] // 애드온 적용
};