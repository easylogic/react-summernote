declare module '*.mdx';
import { ReactNode, FunctionComponent } from "react";

interface SummernoteProps {
    id: string; 
    opt?: any;
    children?: ReactNode;
    value?: string;
}

interface SummernoteContext {
    invoke: (...args: any[]) => void; 
    $note: any;
    ui: any;
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

declare global {
    interface Window {
        jQuery:any;
        $:any;
    }
}