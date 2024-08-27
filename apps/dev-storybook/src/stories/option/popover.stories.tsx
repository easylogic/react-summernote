import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';
import { defaultStyle } from '../util';
import { ReactSummernoteLite } from '@easylogic/react-summernote-lite';

const meta: Meta<typeof ReactSummernoteLite> = {
  title: 'Option/Popover',
  component: ReactSummernoteLite,
};

export default meta;
type Story = StoryObj<typeof ReactSummernoteLite>;

const Template: StoryFn<typeof ReactSummernoteLite> = (args) => (
  <div style={defaultStyle}>
    <h1>Popover</h1>
    <a href="?path=/docs/api-feature-list--page"> &gt;&gt; Feature List</a>
    <pre>
      {`
// default popover 
popover: {
  image: [
    ['image', ['resizeFull', 'resizeHalf', 'resizeQuarter', 'resizeNone']],
    ['float', ['floatLeft', 'floatRight', 'floatNone']],
    ['remove', ['removeMedia']]
  ],
  link: [
    ['link', ['linkDialogShow', 'unlink']]
  ],
  table: [
    ['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']],
    ['delete', ['deleteRow', 'deleteCol', 'deleteTable']],
  ],
  air: [
    ['color', ['color']],
    ['font', ['bold', 'underline', 'clear']],
    ['para', ['ul', 'paragraph']],
    ['table', ['table']],
    ['insert', ['link', 'picture']]
  ]
}
      `}
    </pre>
    <ReactSummernoteLite {...args} />

    <h2>Custom popover</h2>
    <pre>
      {`
<ReactSummernoteLite id="sample2" popover={{
    air: [
      ['color', ['color']],
      ['font', ['bold', 'underline', 'clear']]
    ]
}} />          
      `}
    </pre>
    <ReactSummernoteLite
      {...args}
      popover={{
        air: [
          ['color', ['color']],
          ['font', ['bold', 'underline', 'clear']],
        ],
      }}
    />
  </div>
);

export const Popover: Story = {
  render: Template as StoryFn<typeof ReactSummernoteLite>,
  args: {
    id: 'sample',
  },
};

export const CustomPopover: Story = {
  render: Template as StoryFn<typeof ReactSummernoteLite>,
  args: {
    id: 'sample2',
    popover: {
      air: [
        ['color', ['color']],
        ['font', ['bold', 'underline', 'clear']],
      ],
    },
  },
};
