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
        }}>
            <div>안녕</div>
            만나서 반가워
        </ReactSummernoteLite>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));