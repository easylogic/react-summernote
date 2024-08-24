import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import 'jquery'
import 'summernote/dist/lang/summernote-ko-KR';
import { withKnobs} from "@storybook/addon-knobs";



export { SummernoteI18nOtherLanguage } from './option/lang';

export default {
  title: 'Option/Internalization',
  component: ReactSummernoteLite,
  decorators: [withKnobs] // 애드온 적용
};