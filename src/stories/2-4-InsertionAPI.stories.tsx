import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from "@storybook/addon-knobs";

export { CreateLinkCommand } from './insertion-api/createLink.unlink';
export { InsertImageCommand } from './insertion-api/insertImage';
export { InsertNodeCommand } from './insertion-api/insertNode';
export { InsertTextCommand } from './insertion-api/insertText';
export { PasteHTMLCommand } from './insertion-api/pasteHTML';


export default {
  title: 'Insertion API',
  component: ReactSummernoteLite,
  decorators: [withKnobs] // 애드온 적용
};
