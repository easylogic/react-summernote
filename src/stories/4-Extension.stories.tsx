import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from "@storybook/addon-knobs";

export { NativeButtonExtension } from './extensions/native-button';
export { ButtonExtension } from './extensions/button';


export default {
  title: 'Extension',
  component: ReactSummernoteLite,
  decorators: [withKnobs] // 애드온 적용
};
