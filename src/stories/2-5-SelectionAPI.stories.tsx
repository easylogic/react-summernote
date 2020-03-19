import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from "@storybook/addon-knobs";

export { GetLastRangeCommand } from './selection-api/getLastRange';
export { RangeSelectCommand } from './selection-api/range.select';
export { RangeCollapseCommand } from './selection-api/range.collapse';
export { RangeSplitTextCommand } from './selection-api/range.splitText';
export { RangeDeleteContentsCommand } from './selection-api/range.deleteContents';
export { RangeWrapBodyInlineWithParaCommand } from './selection-api/range.wrapBodyInlineWithPara';
export { RangeInsertNodeCommand } from './selection-api/range.insertNode';
export { RangePasteHTMLCommand } from './selection-api/range.pasteHTML';
export { RangeToStringCommand } from './selection-api/range.toString';
export { RangeGetWordRangeCommand } from './selection-api/range.getWordRange';
export { RangeGetWordsMatchRangeCommand } from './selection-api/range.getWordsMatchRange';
export { RangeGetClientRectsCommand } from './selection-api/range.getClientRects';
export { RangeNativeRangeCommand } from './selection-api/range.nativeRange';

export default {
  title: 'API/Range & Selection API',
  component: ReactSummernoteLite,
  decorators: [withKnobs] // 애드온 적용
};
