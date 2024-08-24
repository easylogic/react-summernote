import React from 'react'; 

import { defaultStyle } from "../util"
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';


export const SummernoteTableClassName = () => {
    return (
      <div style={defaultStyle}>
        <h1>tableClassName</h1>

      <pre>{`
<ReactSummernoteLite id="sample" tableClassName="table table-bordered my-table-class" />
      `}</pre>
        <ReactSummernoteLite id="sample" tableClassName="table table-bordered my-table-class" />
      </div>
    )
  }
  
  SummernoteTableClassName.story = {
    name: 'tableClassName',
  }
  