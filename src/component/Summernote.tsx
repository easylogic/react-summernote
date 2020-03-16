import React, { useEffect } from 'react';
import $ from 'jquery';
import { SummernoteProps } from 'src/index';

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