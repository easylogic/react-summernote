import React from 'react';
import * as ReactDOM from 'react-dom';
import ReactSummernoteLite from '../summernote/ReactSummernoteLite';

import 'jquery';
import 'summernote/lang/summernote-ko-KR';

function App() {

    return (
        <ReactSummernoteLite id='summernote' opt={{
            height: 300,
            lang: 'ko-KR',
            placeholder: "Welcome to react summernote!"
        }} />
    )
}

ReactDOM.render(<App />, document.getElementById('app'));