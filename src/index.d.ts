import { ReactNode, FunctionComponent, Context } from "react";

interface SummernoteHintProps {
    words?: any[];
    match?: RegExp;
    search?: (keyword: string, callback: Function) => void;
}

interface SummernotePopoverProps {
    image?:  any[];
    link?:  any[];
    table?:  any[];
    air?:  any[];
}

interface SummernoteStyleTagsProps {
    tag?: string;
    title?: string;
    style?: string;
    className?: string;
    value?: string;
}

interface SummernoteToolbarItemGroupProps {
    [x: number]: string|string[];
}

interface SummernoteToolbarItemProps {
    [x:number]: SummernoteToolbarItemGroupProps;
}

interface SummernoteJQueryInstance {
    summernote?: (...arg:string[]) => void; 
}

interface SummernoteCallbackInitProps {
    note?: SummernoteJQueryInstance;
}

interface SummernoteExtensionButtonProps {
    [x: string]: (context: SummernoteContext) => any;
}

interface SummernoteCodemirrorProps {
    theme?: string;
    [x: string]: any;
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
    fontSizeUnits?: string[];
    hint?: SummernoteHintProps;
    lineHeights?: string[];
    popover?: SummernotePopoverProps;
    shortcuts?: boolean;
    styleTags?: Array<SummernoteStyleTagsProps|string>;
    tabDisable?: boolean;
    disableGrammar?: boolean;
    spellCheck?: boolean;
    codemirror?: SummernoteCodemirrorProps;
    toolbar?: SummernoteToolbarItemProps[];
    buttons?: SummernoteExtensionButtonProps;
    

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