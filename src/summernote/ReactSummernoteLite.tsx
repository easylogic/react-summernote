import React from 'react';
import 'summernote/dist/summernote-lite';
import 'summernote/dist/summernote-lite.css';
import Summernote from 'src/component/Summernote';
import { SummernoteProps } from 'index';


function ReactSummernoteLite(props: SummernoteProps) {
    return (
        <Summernote id={props.id} opt={props.opt}>{props.children}</Summernote>
    )
}

export default ReactSummernoteLite;