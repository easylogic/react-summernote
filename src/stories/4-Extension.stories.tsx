import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from "@storybook/addon-knobs";



export { NativeButtonExtension } from './extensions/native-button';
export { ButtonExtension } from './extensions/button';
export { CustomPlugin } from './extensions/plugin';
export { InitializePlugin } from './extensions/plugin-initialize';
export { DestoryPlugin } from './extensions/plugin-destroy';
export { EventPlugin } from './extensions/plugin-event';
export { CommandPlugin } from './extensions/plugin-command';
export { ButtonPlugin } from './extensions/plugin-button';

export default {
  title: 'Extension',
  component: ReactSummernoteLite,
  decorators: [withKnobs] // 애드온 적용
};
