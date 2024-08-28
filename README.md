# react-summernote

React extension for summernote

This library support all summernote features.

# install

```
npm install jquery summernote @easylogic/react-summernote @easylogic/react-summernote-lite
```

# Getting Started

```js
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';

const EditorComponent = () => {
  return (
    <ReactSummernoteLite
      id="sample"
      onInit={({ note }) => {
        note.summernote('pasteHTML', '<span style="font-size:30px">Hello, world for 30px</span>');
      }}
    />
  );
};

export default EditorComponent;
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
