import React from 'react'; 
import { withKnobs } from "@storybook/addon-knobs"
import { defaultStyle } from "../util"
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';


export const SummernoteStyleTags = () => {
    return (
      <div style={defaultStyle}>
        <h1>styleTags</h1>
        <p>You can set your own selection of styles with the styleTags option.</p>
        <p>The tags can be specified just by tag name (as with p or pre or h1-h6 above). It is also possible to customize the style in more detail by providing an object looking like:</p>
<pre>{`
{
    tag : 'tag name ',
    title : 'dropdown item title',
    style : 'dropdown item style',
    className : 'applyed element class name and dropdown item className',
    value : 'Value to apply when clicked'
}
`}
</pre>

      <pre>{`
  <ReactSummernoteLite id="sample" opt={{ 
    styleTags: [
      'p',
      { title: 'Blockquote', tag: 'blockquote', className: 'blockquote', value: 'blockquote' },
      'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
    ],
  }} />
      `}</pre>
        <ReactSummernoteLite id="sample" opt={{ 
          styleTags: [
           'p',
            { title: 'Blockquote', tag: 'blockquote', className: 'blockquote', value: 'blockquote' },
           'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
          ],
        }} />
      </div>
    )
  }
  
  SummernoteStyleTags.story = {
    name: 'styleTags',
    decorators: [withKnobs],
  }
  