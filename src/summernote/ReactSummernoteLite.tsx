import React from 'react';
import * as ReactDOM from 'react-dom'
import 'summernote/dist/summernote-lite';
import 'summernote/dist/summernote-lite.css';
import Summernote from 'src/component/Summernote';
import { SummernoteProps, SummernoteContext, SummernoteCustomButtonProps } from 'src/index';

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

export function createNativeButton (opt: any) {
    return (context: SummernoteContext) => {
        const ui: any = context.ui; 

        const button = ui.button({
            // contents: createSummernoteButton(opt.contents),
            container: opt.container || 'body',
            tooltip: opt.tootip || 'hello',
            click: function () {
                opt.click && opt.click(context);
            }
        });

        return button.render();   // return button as jquery object
    }

}

function ReactSummernoteLite(props: SummernoteProps) {
    return (
        <Summernote id={props.id} opt={props.opt}>{props.children}</Summernote>
    )
}

export default ReactSummernoteLite;