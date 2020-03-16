import React from 'react';
import jquery from 'jquery';
window.jQuery = jquery;
window.$ = jquery;
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'summernote/dist/summernote-bs4';
import 'summernote/dist/summernote-bs4.css';
import Summernote from 'src/component/Summernote';
import { SummernoteProps } from 'src/index';


function ReactSummernoteBS4({children, ...props}: SummernoteProps) {
    return (
        <Summernote {...props}>{children}</Summernote>
    )
}

export default ReactSummernoteBS4;