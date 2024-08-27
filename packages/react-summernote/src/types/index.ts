import { ReactNode, HTMLAttributes, ComponentType } from 'react';

export interface SummernoteHintProps {
  words?: any[];
  match?: RegExp;
  search?: (keyword: string, callback: Function) => void;
}

export interface SummernotePopoverProps {
  image?: any[];
  link?: any[];
  table?: any[];
  air?: any[];
}

export interface SummernoteStyleTagsProps {
  tag?: string;
  title?: string;
  style?: string;
  className?: string;
  value?: string;
}

export interface SummernoteToolbarItemGroupProps {
  [x: number]: string | string[];
}

export interface SummernoteToolbarItemProps {
  [x: number]: SummernoteToolbarItemGroupProps;
}

export interface WrappedRange {
  collapse: (isCollapseToStart?: boolean) => Range;
  getLastRange: () => Range;
  deleteContents: () => void;
  getClientRects: () => DOMRectList;
  getWordRange: (findAfter?: boolean) => WrappedRange;
  getWordsMatchRange: (regex: RegExp) => WrappedRange;
  insertNode: (node: HTMLElement) => void;
  nativeRange: () => Range;
  pasteHTML: (html: string) => void;
  select: () => WrappedRange;
  splitText: () => string;
  toString: () => string;
  wrapBodyInlineWithPara: () => WrappedRange;
}

export type SummernoteCommand =
  | 'justify'
  | 'justifyLeft'
  | 'justifyCenter'
  | 'justifyRight'
  | 'justifyFull'
  | 'formatBlock'
  | 'insertText'
  | 'insertImage'
  | 'insertNode'
  | 'insertParagraph'
  | 'insertOrderedList'
  | 'insertUnorderedList'
  | 'pasteHTML'
  | 'createLink'
  | 'unlink'
  | 'lineHeight'
  | 'undo'
  | 'redo'
  | 'focus'
  | 'codeview'
  | 'backColor'
  | 'foreColor'
  | 'superscript'
  | 'subscript'
  | 'clear'
  | 'removeFormat'
  | 'outdent'
  | 'indent'
  | 'paragraphStyle'
  | 'fontSize'
  | 'fontSizeUnit'
  | 'fontName'
  | 'formatPara'
  | 'bold'
  | 'italic'
  | 'underline'
  | 'strikethrough'
  | 'getLastRange'
  | 'formatH1'
  | 'formatH2'
  | 'formatH3'
  | 'formatH4'
  | 'formatH5'
  | 'formatH6'
  | 'isEmpty'
  | string;

export interface SummernoteCommandCallback {
  (command: 'justify' | 'justifyLeft' | 'justifyCenter' | 'justifyRight' | 'justifyFull'): void;
  (command: 'formatBlock', tagName: string): void;
  (command: 'insertText', text: string): void;
  (command: 'insertNode', node: HTMLElement): void;
  (command: 'pasteHTML', html: string): void;
  (command: 'insertImage', url: string, filename?: string): void;
  (command: 'insertImage', url: string, callback?: (image: JQuery<HTMLImageElement>) => void): void;
  (command: 'insertParagraph'): void;
  (command: 'insertOrderedList'): void;
  (command: 'insertUnorderedList'): void;
  (command: 'createLink', linkInfo: { text: string; url: string; isNewWindow: boolean }): void;
  (
    command:
      | 'undo'
      | 'redo'
      | 'focus'
      | 'codeview'
      | 'clear'
      | 'removeFormat'
      | 'outdent'
      | 'indent'
      | 'paragraphStyle'
      | 'formatPara'
      | 'lineHeight'
      | 'unlink'
      | 'formatH1'
      | 'formatH2'
      | 'formatH3'
      | 'formatH4'
      | 'formatH5'
      | 'formatH6',
  ): void;
  (command: 'backColor' | 'foreColor', color: string): void;
  (command: 'fontName', fontName: string): void;
  (command: 'fontSize', fontSize: string | number): void;
  (command: 'fontSizeUnit', fontSizeUnit: string): void;
  (command: 'bold' | 'italic' | 'underline' | 'strikethrough' | 'superscript' | 'subscript'): void;
  (command: 'getLastRange'): WrappedRange;
  (command: 'lineHeight', lineHeight: number): void;
  (command: 'isEmpty'): boolean;
  (command: SummernoteCommand, ...args: any[]): void;
}

export interface SummernoteJQueryInstance {
  summernote: SummernoteCommandCallback;
}

export interface SummernoteCallbackInitProps {
  note: SummernoteJQueryInstance;
}

export interface SummernoteExtensionButtonProps {
  [x: string]: (context: SummernoteContext) => any;
}

export interface SummernoteCodemirrorProps {
  theme?: string;
  [x: string]: any;
}

type SummernoteInvokeCallback = (...args: any[]) => any;

export interface SummernoteColorListRow {
  [x: number]: string;
}

export interface SummernoteTableSize {
  row: number;
  col: number;
}

export interface SummernoteProps extends Omit<HTMLAttributes<HTMLDivElement>, 'id' | 'onChange'> {
  id?: string;
  opt?: any;
  children?: ReactNode;
  value?: string;
  containerClassName?: string;

  // options
  placeholder?: string;
  airMode?: boolean;
  height?: number;
  focus?: boolean;
  lang?: string;
  dialogsInBody?: boolean;
  blockquoteBreakingLevel?: number;
  disableDragAndDrop?: boolean;
  fontNames?: string[];
  fontNamesIgnoreCheck?: string[];
  fontSizeUnits?: string[];
  hint?: SummernoteHintProps;
  colors?: SummernoteColorListRow[];
  colorsName?: SummernoteColorListRow[];
  hintMode?: string;
  hintSelect?: string;
  hintDirection?: string;
  lineHeights?: string[];
  popover?: SummernotePopoverProps;
  shortcuts?: boolean;
  styleTags?: Array<SummernoteStyleTagsProps | string>;
  tabDisable?: boolean;
  tableClassName?: string;
  insertTableMaxSize?: SummernoteTableSize;
  disableGrammar?: boolean;
  spellCheck?: boolean;
  codemirror?: SummernoteCodemirrorProps;
  toolbar?: SummernoteToolbarItemProps[] | boolean;
  toolbarPosition?: 'top' | 'bottom';
  toolbarContainer?: string | HTMLElement;
  followingToolbar?: boolean;
  buttons?: SummernoteExtensionButtonProps;
  recordEveryKeystroke?: boolean;
  historyLimit?: number;

  codeviewFilter?: boolean;
  codeviewFilterRegex?: RegExp;
  codeviewIframeFilter?: boolean;
  codeviewIframeWhitelistSrc?: string[];
  codeviewIframeWhitelistSrcBase?: string[];

  linkTargetBlank?: boolean;
  useProtocol?: boolean;
  defaultProtocol?: string;

  // callbacks
  onInit?: (obj: SummernoteCallbackInitProps) => void;
  onBlur?: (e: any) => void;
  onBlurCodeview?: (e: any) => void;
  onChange?: (value: string, e: any) => void;
  onEnter?: (e: any) => void;
  onFocus?: (e: any) => void;
  onImageUpload?: (files: File[]) => void;
  onKeydown?: (e: any) => void;
  onKeyup?: (e: any) => void;
  onMousedown?: (e: any) => void;
  onMouseup?: (e: any) => void;
  onPaste?: (e: any) => void;

  initInvoke?: (invoke: SummernoteInvokeCallback) => void;
}

export interface SummernoteContext {
  invoke: SummernoteCommandCallback;
  $note: JQuery<HTMLDivElement> & SummernoteJQueryInstance;
  ui: any;
  memo: (key: string, value: any) => void;
  options: any;
}

export interface SummernoteCustomButtonProps {
  element?: ComponentType<{ context: SummernoteContext }>;
  render?: (props: SummernoteButtonProps) => ReactNode;
  container?: string;
  title?: string;
  tooltip?: string;
  props?: object;
  onClick?: (context?: SummernoteContext) => void;
}

export interface SummernoteButtonProps {
  context: SummernoteContext;
  onClick?: () => void;
  children?: ReactNode;
  [restProperty: string]: any;
}

export interface SummernoteButtonGroup {
  [index: number]: HTMLElement;
}

export interface SummernotePluginClass {
  events?: any;
  context?: SummernoteContext;
  $?: JQueryStatic;
}

export interface SummernotePluginInterface {
  new (context: SummernoteContext, $: JQueryStatic): SummernotePluginClass;
}

declare global {
  interface Window {
    jQuery: any;
    $: any;
  }
}
