import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import 'jquery'
import 'summernote/dist/lang/summernote-ko-KR';
import { withKnobs} from "@storybook/addon-knobs";


export { SummernoteDialogsInBody } from './option/dialogsInBody';
export { SummernoteHintOption } from './option/hint';
export { SummernotePopover } from './option/popover';

export default {
  title: 'Option/Dialog & Popover',
  component: ReactSummernoteLite,
  decorators: [withKnobs] // 애드온 적용
};