import React, { useEffect } from 'react';
import $ from 'jquery';
import { SummernoteProps, SummernoteContext, SummernotePluginInterface } from 'src/index';



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

function getContainerId (id: string) {
    return `${id}-container`
}

function getElement(id: string) {
    return document.getElementById(getContainerId(id))
}

function Summernote({value, children, opt, ...props}: SummernoteProps) {
    const {
        onInit,
        onBlur,
        onBlurCodeview,
        onChange,
        onEnter,
        onFocus,
        onImageUpload,
        onKeydown,
        onKeyup,
        onMousedown,
        onMouseup,
        onPaste,        
    } = props;

    const callbacks = {
        onInit,
        onBlur,
        onBlurCodeview,
        onChange,
        onEnter,
        onFocus,
        onImageUpload,
        onKeydown,
        onKeyup,
        onMousedown,
        onMouseup,
        onPaste,              
    }
    useEffect(() => {

        const dialogsInBody = typeof props.dialogsInBody === 'undefined' ? true : props.dialogsInBody;

        ($(getElement(props.id)) as any).summernote({ ...props, callbacks, ...opt, dialogsInBody });

        return () => {
            ($(getElement(props.id)) as any).summernote('destroy');
        } 
    }, [props])

    return (
        <div className="react-summernote">
            <div id={`${props.id}-container`} className="react-summernote-container">{value || children}</div>
        </div>
    )
}

export default Summernote;