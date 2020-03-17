import React from 'react'
import { defaultStyle } from '../util'
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite'
import { boolean } from '@storybook/addon-knobs'

export const SummernoteFollowingToolbar = () => {

    return (
      <div style={defaultStyle}>
        <h1>Following Toolbar</h1>
          <pre>
            {`

    <ReactSummernoteLite id="sample2" followingToolbar={true} />          
            `}
          </pre>
        <ReactSummernoteLite id="sample2" followingToolbar={boolean('followingToolbar', true)} />
  
      </div>
    )
  }
  
  SummernoteFollowingToolbar.story = {
    name: 'following toolbar',
  }
   
  