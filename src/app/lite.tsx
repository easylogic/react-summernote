import React, { ReactElement } from 'react';
import * as ReactDOM from 'react-dom';
import ReactSummernoteLite from '../summernote/ReactSummernoteLite';
import { SummernoteContext, SummernoteButtonProps } from 'src/index';

import 'jquery';
import 'summernote/lang/summernote-ko-KR';

function createButton (button: ReactElement): any {
    const span = document.createElement('span');
    ReactDOM.render(button, span)
    return span;
}

function MyButton(props: SummernoteButtonProps) {
    return (<button onClick={() => console.log(props.context.invoke('code'))}>aaa</button>)
}

function App() {

    return (
        <ReactSummernoteLite id='summernote' opt={{
            height: 300,
            lang: 'ko-KR',
            buttons: {
                hello: function (context: SummernoteContext) {
                    return createButton (<MyButton context={context}></MyButton>)
                }
            },
        }}>
            <div>안녕</div>
            만나서 반가워
        </ReactSummernoteLite>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));