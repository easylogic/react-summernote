import React from 'react'; 

import { defaultStyle } from "../util"
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';


export const SummernoteInsertTableMaxSize = () => {
    return (
      <div style={defaultStyle}>
        <h1>insertTableMaxSize: {`{ row: 1, col: 20 }`}</h1>

      <pre>{`
        <ReactSummernoteLite id="sample" insertTableMaxSize={{row: 2, col: 20}} />
      `}</pre>
        <ReactSummernoteLite id="sample" insertTableMaxSize={{row: 2, col: 20}} />
      </div>
    )
  }
  
  SummernoteInsertTableMaxSize.story = {
    name: 'insertTableMaxSize',
  }
  