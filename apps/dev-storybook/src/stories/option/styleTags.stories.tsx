import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Option/StyleTags',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

export const SummernoteStyleTags: Story = {
  render: () => (
    <div style={defaultStyle}>
      <h1>styleTags</h1>
      <p>You can set your own selection of styles with the styleTags option.</p>
      <p>
        The tags can be specified just by tag name (as with p or pre or h1-h6 above). It is also possible to customize
        the style in more detail by providing an object looking like:
      </p>
      <pre>{`
{
    tag : 'tag name ',
    title : 'dropdown item title',
    style : 'dropdown item style',
    className : 'applyed element class name and dropdown item className',
    value : 'Value to apply when clicked'
}
      `}</pre>
      <pre>{`
<ReactSummernoteLite 
  id="sample" 
  styleTags={[
    'p',
    { title: 'Blockquote', tag: 'blockquote', className: 'blockquote', value: 'blockquote' },
    'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
  ]} 
/>
      `}</pre>
      <ReactSummernoteLite
        id="sample"
        styleTags={[
          'p',
          { title: 'Blockquote', tag: 'blockquote', className: 'blockquote', value: 'blockquote' },
          'pre',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
        ]}
      />
    </div>
  ),
};
