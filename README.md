# react-summernote
React extension for summernote

This library support all summernote features. 


# install 
```
npm install @easylogic/react-summernote 
```

# Getting Started 

```js
import 'jquery'
import ReactSummernoteLite from '@easylogic/react-summernote/summernote-lite'
import '@easylogic/react-summernote/summernote-lite.css'

const EditorComponent = () => {
  return <ReactSummernoteLite id="sample" onInit={({ note }: any ) => {
          note.summernote('pasteHTML', '<span style="font-size:30px">Hello, world for 30px</span>')
        }} />
}

export default EditorComponent
```





# development 

```
npm install
npm run dev 
```

# build 

```
npm install
npm run build
```

# storybook 

```
npm install
npm run storybook
```
