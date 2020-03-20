import React from 'react';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';

export default {
  title: 'Introduce/Editors',
};

export const BS4Story = () => (
  <div style={{padding: '10px 40px'}}>
      <h2>Bootstrap v4</h2>
      <div>
        <pre>
          {`
  import ReactSummernoteBS4 from '@easylogic/react-summernote/summernote-bs4';
  import '@easylogic/react-summernote/summernote-bs4.css';

  <ReactSummernoteBS4 id="bootstrap" opt={{ ... }}/>
          
          `}
        </pre>
      </div>    
    </div>    
)

BS4Story.story = {
  name: "Bootstrap4"
}

export const LiteStory = () => (
  <div style={{padding: '10px 40px'}}>
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
  </div>    
)

LiteStory.story = {
  name: 'Lite'
}