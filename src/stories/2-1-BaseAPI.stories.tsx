import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from "@storybook/addon-knobs";

export { CodeViewToggleCommand } from './basic-api/codeview.toggle';
export { CreateRangeCommand } from './basic-api/createRange';
export { DisableCommand } from './basic-api/disable';
export { EnableCommand } from './basic-api/enable';
export { SpellCheckCommand } from './basic-api/spellCheck';
export { DisableGrammarCommand } from './basic-api/disableGrammar';
export { FocusCommand } from './basic-api/focus';
export { FullScreenToggleCommand } from './basic-api/fullscreen.toggle';
export { IsEmptyCommand } from './basic-api/isEmpty';
export { ResetCommand } from './basic-api/reset';
export { UndoRedoCommand } from './basic-api/undo.redo';

export default {
  title: 'Basic API',
  component: ReactSummernoteLite,
  decorators: [withKnobs] // 애드온 적용
};
