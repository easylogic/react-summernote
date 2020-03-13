import React from 'react';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'summernote/dist/summernote-bs4';
import 'summernote/dist/summernote-bs4.css';
import Summernote from 'src/component/Summernote';
import { SummernoteProps } from 'index';


function ReactSummernoteBS4(props: SummernoteProps) {
    return (
        <Summernote id={props.id} opt={props.opt}></Summernote>
    )
}

export default ReactSummernoteBS4;