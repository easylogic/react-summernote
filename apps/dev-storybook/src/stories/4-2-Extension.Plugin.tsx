import { ReactSummernoteLite } from "@easylogic/react-summernote-lite";


export { CustomPlugin } from './extensions/plugin';
export { InitializePlugin } from './extensions/plugin-initialize';
export { DestoryPlugin } from './extensions/plugin-destroy';
export { EventPlugin } from './extensions/plugin-event';
export { CommandPlugin } from './extensions/plugin-command';
export { ButtonPlugin } from './extensions/plugin-button';

export default {
  title: 'Extension/Plugin',
  component: ReactSummernoteLite,

};
