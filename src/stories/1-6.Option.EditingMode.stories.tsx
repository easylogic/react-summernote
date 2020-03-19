import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import 'jquery'
import 'summernote/dist/lang/summernote-ko-KR';
import { withKnobs} from "@storybook/addon-knobs";


export { SummernoteAirModeOption } from './option/airMode';

export default {
  title: 'Option/Editing Mode',
  component: ReactSummernoteLite,
  decorators: [withKnobs] // 애드온 적용
};