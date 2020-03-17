import React from 'react';
import * as ReactDOM from 'react-dom';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'summernote/dist/summernote-bs4';
import 'summernote/dist/summernote-bs4.css';
import Summernote, {SummernotePlugin, createSummernotePlugin, setSummernoteLang, setSummernoteShortcut} from 'src/component/Summernote';
import { SummernoteProps, SummernoteContext, SummernoteCustomButtonProps } from 'src/index';

export { SummernotePlugin, createSummernotePlugin, setSummernoteLang, setSummernoteShortcut }

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
                opt?.onClick(context);
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

function ReactSummernoteBS4({children, ...props}: SummernoteProps) {
    return (
        <Summernote {...props}>{children}</Summernote>
    )
}

export default ReactSummernoteBS4;