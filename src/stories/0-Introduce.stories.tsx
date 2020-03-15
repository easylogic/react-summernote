import React from 'react';
// import ReactSummernoteBS4 from 'src/summernote/ReactSummernoteBS4';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';

export default {
  title: 'Introduce',
  component: ReactSummernoteLite
};

export const IntroduceReactSummernote = () => {

  return (
    <div style={{
      padding: '10px 50px '
    }}>
      <h1>Introduce of ReactSummernote</h1>
      <div>
        <dl>
          <dt>Support :</dt><dd>Bs4, Lite</dd> 
          <dt>feature :</dt><dd>all features of summernote</dd> 
        </dl>

        <h1>Webpack Config</h1>
        <pre>{`

  plugins: [
    ....,
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
  ]
        `}
        </pre>

        <h1>ReactSummernoteBS4</h1>
        <pre>{`
import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/bootstrap.css'
import ReactSummernoteBS4 from '@easylogic/react-summernote/summernote-bs4'
import '@easylogic/react-summernote/summernote-bs4.css'

const EditorComponent = () => {
  return <ReactSummernoteBS4 id="sample" opt={{ 
    callbacks: { 
      onInit: ({ note }: any ) => {
        $note.summernote('pasteHTML', '<span style="font-size:30px">Hello, world for 30px</span>')
      }
    }
  }} />
}

export default EditorComponent
      `}</pre>        

<h1>ReactSummernoteLite</h1>
        <pre>{`
import 'jquery'
import ReactSummernoteLite from '@easylogic/react-summernote/summernote-lite'
import '@easylogic/react-summernote/summernote-lite.css'

const EditorComponent = () => {
  return <ReactSummernoteBS4 id="sample" opt={{ 
    callbacks: { 
      onInit: ({ note }: any ) => {
        $note.summernote('pasteHTML', '<span style="font-size:30px">Hello, world for 30px</span>')
      }
    }
  }} />
}

export default EditorComponent
      `}</pre>        
      </div>
    </div>
  )
}

IntroduceReactSummernote.story = {
  name: '소개',
};

export const IntroduceReactSummernoteBS4  = () => {
  return (
    <p style={{padding: '10px 40px'}}>
      <h2>Bootstrap v4</h2>
      <p>
        <pre>
          {`
import ReactSummernoteBS4 from '@easylogic/react-summernote/summernote-bs4';
import '@easylogic/react-summernote/summernote-bs4.css';

<ReactSummernoteBS4 id="bootstrap" opt={{ ... }}/>
          
          `}
        </pre>
      </p>
      {/* <ReactSummernoteBS4 id="bootstrap" /> */}
    </p>    
  )
}


IntroduceReactSummernoteBS4.story = {
  name: 'bootstrap4',
  parameters: {
    info: { inline: true }
  }
};


export const IntroduceReactSummernoteLite  = () => {
  return (
    <p style={{padding: '10px 40px'}}>
      <h2>Lite</h2>
      <p>
        <pre>
          {`
import ReactSummernoteLite from '@easylogic/react-summernote/summernote-lite';
import '@easylogic/react-summernote/summernote-lite.css';

<ReactSummernoteLite id="lite" opt={{ ... }}/>
          
          `}
        </pre>
      </p>      
      <ReactSummernoteLite id="lite" />
    </p>    
  )
}


IntroduceReactSummernoteLite.story = {
  name: 'lite',
  parameters: {
    info: { inline: true }
  }
};