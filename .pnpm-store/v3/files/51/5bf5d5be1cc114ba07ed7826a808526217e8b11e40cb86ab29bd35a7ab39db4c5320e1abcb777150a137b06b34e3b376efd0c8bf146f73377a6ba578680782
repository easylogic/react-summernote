# storybook-addon-code

[![NPM](https://img.shields.io/npm/l/%40jls-digital%2Fstorybook-addon-code)](https://github.com/jls-digital/storybook-addon-code/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/%40jls-digital%2Fstorybook-addon-code)](https://www.npmjs.com/package/@jls-digital/storybook-addon-code)
[![install size](https://packagephobia.com/badge?p=@jls-digital/storybook-addon-code)](https://packagephobia.com/result?p=@jls-digital/storybook-addon-code)

This storybook addon provides the ability to display a panel on stories with any
code you want. It's mostly a wrapper for
[storybook's syntax highlighter](https://github.com/storybookjs/storybook/tree/main/code/ui/components/src/components/syntaxhighlighter)
, which is a wrapper for [prism.js](https://www.npmjs.com/package/prismjs).

![Screenshot of Addon](docs/screenshot_1.png)

## Installation

1. `npm install --save-dev @jls-digital/storybook-addon-code`
2. Add `storybook-addon-code` to your storybook's config
3. Add the `sourceCode` parameter to your stories

```ts
// .storybook/main.ts
const config: StorybookConfig = {
  addons: ['@jls-digital/storybook-addon-code'],
};
```

## Usage

In your story files, you can now import code as string (with vite by using the
'?raw' query parameter) and pass it to the `sourceCode` parameter. You can even
import the file you're currently in:

```ts
// button.stories.ts
import rawStories from './button.stories?raw';
import rawComponent from './button?raw';
const meta: Meta<IButtonStory> = {
  parameters: {
    sourceCode: [
      { name: 'Component', code: rawComponent },
      { name: 'Stories', code: rawStories },
    ]
  },
  title: 'Components/Button',
}
```

### Arguments

| Name | Description | Values |
| --- | --- | --- |
| `name` | The name of the sub tab. Default: index of tab. | `string` |
| `code` | The code to display | `string` |
| `language` | The language of the code that should be used for syntax highlighting. Default: `typescript`. | "jxextra", "jsx", "json", "yml", "md", "bash", "css", "html", "tsc", "typescript", "graphql" |

## FAQ

(Click on a question to see the answer.)

<details>
<summary><b>Q: When I add a new file to the list of source code, I get an error saying
"The final argument passed to useMemo changed size between renders."</b></summary>

A: No worries, this is an issue with storybook's TabsState component. You can
simply reload the page and it should work fine.
</details>

<details>
<summary><b>Q: Can I customize the order of my tabs?</b></summary>

A: Yes, the order is determined by the order of the array you pass to the
`sourceCode` parameter.
</details>

## Contributing

We encourage you to contribute to this project! Please check out the
[Contributing guide](CONTRIBUTING.md) for guidelines about how to proceed and
how to set up your dev environment. Join us!

## License

Storybook-Addon-Code is released under the [MIT License](LICENSE).
