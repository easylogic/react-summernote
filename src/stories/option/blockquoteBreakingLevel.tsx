import React from 'react'; 
import { withKnobs, number } from "@storybook/addon-knobs"
import { defaultStyle } from "../util"
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';


export const SummernoteBlockquoteBreakingLevel = () => {
    return (
      <div style={defaultStyle}>
        <h1>blockquoteBreakingLevel</h1>
        <p>
        You can set blockquote breaking level with blockquoteBreakingLevel option.</p>

        <p>Each configurable breaking level means:</p>

        <p>0 - No break, the new paragraph remains inside the quote.</p>
        <p>1 - Break the first blockquote in the ancestors list.</p>
        <p>2 - Break all blockquotes, so that the new paragraph is not quoted. (default)</p>
      <pre>{`
  <ReactSummernoteLite id="sample" blockquoteBreakingLevel={2} />    
      `}</pre>
        <ReactSummernoteLite id="sample" blockquoteBreakingLevel={number('blockquoteBreakingLevel',2)} />
      </div>
    )
  }
  
  SummernoteBlockquoteBreakingLevel.story = {
    name: 'blockquoteBreakingLevel',
    decorators: [withKnobs],
  }
  