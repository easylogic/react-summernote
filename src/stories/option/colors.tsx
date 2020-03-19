import React from 'react';
import { defaultStyle } from "../util"
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';

export const SummernoteColorsOption = () => {
    return (
      <div style={defaultStyle}>
        <h1>colors</h1>
        <p>change colors for summernote color palette</p>
      <pre>{`
        <ReactSummernoteLite id="sample" colors={[
          ['red', 'black']
        ]} colorsName={[
          ['red', 'black']
        ]} />
      `}</pre>
        <ReactSummernoteLite id="sample" colors={[
          ['red', 'black']
        ]} colorsName={[
          ['red', 'black']
        ]} />
      </div>
    )
  }
  
  SummernoteColorsOption.story = {
    name: 'colors',
  }
   
  