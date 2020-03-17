import React from 'react';
import * as ReactDOM from 'react-dom'
import $ from 'jquery';
import 'summernote/dist/summernote-lite';
import 'summernote/dist/summernote-lite.css';
import Summernote from 'src/component/Summernote';
import { SummernoteProps, SummernoteContext, SummernoteCustomButtonProps, SummernotePluginInterface } from 'src/index';

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

export class SummernotePlugin {
    context: SummernoteContext;
    $: JQueryStatic;
    constructor(context: SummernoteContext, $: JQueryStatic) {
        this.context = context;
        this.$ = $; 
    }
}

export function createSummernotePlugin (name: string, PluginClass: SummernotePluginInterface) {
    const jQuery = ($ as any)

    if (jQuery.summernote.plugins[name]) {
        console.warn(`${name} plugin is already exists.`)
    }

    jQuery.extend(jQuery.summernote.plugins, {
        [name]: (context:SummernoteContext) => {
            return new PluginClass(context, jQuery)
        } 
    })
}

function ReactSummernoteLite({children, ...props}: SummernoteProps) {
    return (
        <Summernote {...props}>{children}</Summernote>
    )
}

export default ReactSummernoteLite;