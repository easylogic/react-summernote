import React, { useEffect } from 'react';
import $ from 'jquery';
import { SummernoteProps } from 'src/index';

function getContainerId (id: string) {
    return `${id}-container`
}

function getElement(id: string) {
    return document.getElementById(getContainerId(id))
}

function Summernote(props: SummernoteProps) {
    useEffect(() => {

        const dialogsInBody = typeof props.opt?.dialogsInBody === 'undefined' ? true : props.opt.dialogsInBody;

        ($(getElement(props.id)) as any).summernote({ ...props.opt, dialogsInBody });

        return () => {
            ($(getElement(props.id)) as any).summernote('destroy');
        } 
    }, [props.opt])

    return (
        <div className="react-summernote">
            <div id={`${props.id}-container`} className="react-summernote-container">{props.children}</div>
        </div>
    )
}

export default Summernote;