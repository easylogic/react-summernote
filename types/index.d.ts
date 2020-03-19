import { ReactNode, FunctionComponent } from "react";

export interface SummernoteHintProps {
    words?: any[];
    match?: RegExp;
    search?: (keyword: string, callback: Function) => void;
}

export interface SummernotePopoverProps {
    image?:  any[];
    link?:  any[];
    table?:  any[];
    air?:  any[];
}

export interface SummernoteStyleTagsProps {
    tag?: string;
    title?: string;
    style?: string;
    className?: string;
    value?: string;
}

export interface SummernoteToolbarItemGroupProps {
    [x: number]: string|string[];
}

export interface SummernoteToolbarItemProps {
    [x:number]: SummernoteToolbarItemGroupProps;
}

export interface SummernoteJQueryInstance {
    summernote?: (...arg:string[]) => void; 
}

export interface SummernoteCallbackInitProps {
    note?: SummernoteJQueryInstance;
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

interface SummernoteProps {
    id: string; 
    opt?: any;
    children?: ReactNode;
    value?: string;

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
    styleTags?: Array<SummernoteStyleTagsProps|string>;
    tabDisable?: boolean;
    tableClassName?: string;
    insertTableMaxSize?: SummernoteTableSize,    
    disableGrammar?: boolean;
    spellCheck?: boolean;
    codemirror?: SummernoteCodemirrorProps;
    toolbar?: SummernoteToolbarItemProps[]|boolean;
    toolbarPosition?: 'top' | 'bottom';
    toolbarContainer?: string|HTMLElement;
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

interface SummernoteContext {
    invoke?: (...args: any[]) => void; 
    $note?: any;
    ui?: any;
    memo?: (key: string, value: any) => void;
    options?: any;
}


interface SummernoteCustomButtonProps {
    element?: FunctionComponent,
    container?: string;
    title?: string;
    tooltip?: string; 
    props?: object;
    onClick?: (context?: SummernoteContext) => void; 
}

interface SummernoteButtonProps {
    context?: SummernoteContext;
    onClick?: () => void; 
    children?: ReactNode;
    [restProperty:string]: any;
}

interface SummernoteButtonGroup {
    [index: number]: HTMLElement;
}


interface SummernotePluginClass {
    events?: any;
    context?: SummernoteContext;
    $?: JQueryStatic;
}

interface SummernotePluginInterface {
    new (context: SummernoteContext, $: JQueryStatic): SummernotePluginClass;
}

declare global {
    interface Window {
        jQuery:any;
        $:any;
    }
}