import { ReactNode } from "react";

interface SummernoteProps {
    id: string; 
    opt?: any;
    children?: ReactNode;
    value?: string;
}

interface SummernoteContext {
    invoke: (...args: any[]) => void; 
}



interface SummernoteButtonProps {
    context?: SummernoteContext;
    onClick?: () => void; 
}

interface SummernoteButtonGroup {
    [index: number]: HTMLElement;
}