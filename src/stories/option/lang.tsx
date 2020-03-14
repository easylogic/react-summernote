import React from 'react'
import ReactSummernoteLite from "src/summernote/ReactSummernoteLite"
import { defaultStyle } from '../util'


export const SummernoteI18nOtherLanguage = () => {
    return (
      <div style={defaultStyle}>
        <h1>Language - ko-KR</h1>
  
          <pre>
            {`
  import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
  import 'jquery'
  import 'summernote/dist/lang/summernote-ko-KR';
  
  <ReactSummernoteLite id="sample" opt={{ lang: 'ko-KR'} } />
            
            `}
          </pre>
  
          <a href="https://github.com/summernote/summernote/tree/master/lang" target="_win">More languages</a>  
        <ReactSummernoteLite id="sample" opt={{ lang: 'ko-KR'} } />
      </div>
    )
  }
  
  SummernoteI18nOtherLanguage.story = {
    name: 'lang',
  }
   