import React from 'react';
import * as ReactDOM from 'react-dom'
import 'summernote/dist/summernote-lite';
import 'summernote/dist/summernote-lite.css';
import { Summernote, SummernoteContext, SummernoteCustomButtonProps, SummernoteProps } from '@easylogic/react-summernote';

interface ButtonProps {
    container?: string;
    tooltip?: string;
    contents?: string;
    click?: () => void; 
}

interface Attribute {
    context?: SummernoteContext;
}

export function createSummernoteButton (opt: SummernoteCustomButtonProps): any {
    return (context: SummernoteContext) => {
        let buttonProps: ButtonProps = {
            container: opt.container || 'body',
            tooltip: opt.tooltip || 'sample',
        }

        if (opt.title && !opt.element ) {
            buttonProps.contents = opt.title;
            buttonProps.click = () => {
                opt?.onClick?.(context);
            }
            return context.ui.button(buttonProps).render();
        } else {
            const button = context.ui.button(buttonProps)
            const el = button.render();   // return button as jquery object
    
            if (opt?.element) {
                const props = {context, ...opt.props};
                ReactDOM.render(React.createElement<Attribute>(opt.element, props), el[0])
            }
    
        
            return el;
        }
    }
}


function ReactSummernoteLite({children, ...props}: SummernoteProps) {
    return (
        <Summernote {...props}>{children}</Summernote>
    )
}

export default ReactSummernoteLite;