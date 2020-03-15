import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from "@storybook/addon-knobs";


export { FormatHeaderCommand } from './paragraph-api/formatHeader';
export { FormatParaCommand } from './paragraph-api/formatPara';
export { IndentOutdentCommand } from './paragraph-api/indent.outdent';
export { InsertOrderedListCommand } from './paragraph-api/insertOrderedList';
export { InsertParagraphCommand } from './paragraph-api/insertParagraph';
export { AlignCommand } from './paragraph-api/align';
export { LineHeightCommand } from './paragraph-api/lineHeight';

export default {
  title: 'Paragraph API',
  component: ReactSummernoteLite,
  decorators: [withKnobs] // 애드온 적용
};
