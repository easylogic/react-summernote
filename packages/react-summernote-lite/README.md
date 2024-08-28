# @easylogic/react-summernote-lite

React extension for summernote lite

This library support all summernote features.

# install

```
npm install jquery summernote @easylogic/react-summernote-lite
```

# Getting Started

```js
import {ReactSummernoteLite} from '@easylogic/react-summernote-lite'

const EditorComponent = () => {
  return <ReactSummernoteLite id="sample" onInit={({ note }: any ) => {
          note.summernote('pasteHTML', '<span style="font-size:30px">Hello, world for 30px</span>')
        }} />
}

export default EditorComponent
```

# storybook

```
pnpm install
pnpm storybook
```
