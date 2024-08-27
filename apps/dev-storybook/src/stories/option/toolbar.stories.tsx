import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';
import { defaultStyle } from '../util';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Option/Toolbar',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

const DefaultToolbarCode = `
// default toolbar 
toolbar: [
  ['style', ['style']],
  ['font', ['bold', 'underline', 'clear']],
  ['fontname', ['fontname']],
  ['color', ['color']],
  ['para', ['ul', 'ol', 'paragraph']],
  ['table', ['table']],
  ['insert', ['link', 'picture', 'video']],
  ['view', ['fullscreen', 'codeview', 'help']],
],
`;

const CustomToolbarCode = `
<ReactSummernoteLite id="sample2" toolbar={[
    ['group',['fontsize', 'color']]
]} />          
`;

export const DefaultToolbar: Story = {
  render: (args) => (
    <div style={defaultStyle}>
      <h1>Toolbar</h1>
      <a href="?path=/docs/api-feature-list--page"> &gt;&gt; Feature List</a>
      <pre>{DefaultToolbarCode}</pre>
      <ReactSummernoteLite {...args} />
    </div>
  ),
  args: {
    id: 'sample',
  },
};

export const CustomToolbar: Story = {
  render: (args) => (
    <div style={defaultStyle}>
      <h2>Custom Toolbar</h2>
      <pre>{CustomToolbarCode}</pre>
      <ReactSummernoteLite {...args} />
    </div>
  ),
  args: {
    id: 'sample2',
    toolbar: [['group', ['fontsize', 'color']]],
  },
};
