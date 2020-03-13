import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { SummernoteProps } from 'index';

function getContainerId (id: string) {
    return `${id}-container`
}

function getElement(id: string) {
    return document.getElementById(getContainerId(id))
}

function Summernote(props: SummernoteProps) {
    const [opt] = useState({...props.opt})

    useEffect(() => {
 
        ($(getElement(props.id)) as any).summernote(opt);

        return () => {
            ($(getElement(props.id)) as any).summernote('destroy');
        } 
    })

    return (
        <div className="react-summernote">
            <div id={`${props.id}-container`} className="react-summernote-container">{props.children}</div>
        </div>
    )
}

export default Summernote;