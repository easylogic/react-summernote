# @easylogic/react-summernote-bs4

React extension for summernote bs4

This library support all summernote features.

# install

```
npm install jquery summernote bootstrap popper.js @easylogic/react-summernote-bs4
```

# Getting Started

```js
import {ReactSummernoteBS4} from '@easylogic/react-summernote-bs4'

const EditorComponent = () => {
  return <ReactSummernoteBS4 id="sample" onInit={({ note }: any ) => {
          note.summernote('pasteHTML', '<span style="font-size:30px">Hello, world for 30px</span>')
        }} />
}

export default EditorComponent
```
