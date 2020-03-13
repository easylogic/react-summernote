import React from 'react';
import * as ReactDOM from 'react-dom';
import ReactSummernoteBS4 from '../summernote/ReactSummernoteBS4';



function App() {

    return <ReactSummernoteBS4 id='summernote' opt={{}}></ReactSummernoteBS4>
}

ReactDOM.render(<App />, document.getElementById('app'));