import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  ReactSummernoteLite,
  SummernoteCallbackInitProps,
  SummernoteJQueryInstance,
} from '@easylogic/react-summernote-lite';

const meta = {
  title: 'Basic API/FullScreenToggle',
  component: ReactSummernoteLite,
} satisfies Meta<typeof ReactSummernoteLite>;

export default meta;
type Story = StoryObj<typeof meta>;

const FullScreenToggleComponent: React.FC = () => {
  const noteRef = React.useRef<SummernoteJQueryInstance | null>(null);

  const doFullScreen = React.useCallback(() => {
    if (noteRef.current) {
      noteRef.current.summernote('fullscreen.toggle');
    }
  }, []);

  const handleInit = React.useCallback(({ note }: SummernoteCallbackInitProps) => {
    noteRef.current = note;
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>fullscreen.toggle</h1>
      <p>You can toggle fullscreen mode by API.</p>
      <pre>{`
        <ReactSummernoteLite 
          id="sample" 
          onInit={({ note }) => {
            note.summernote('fullscreen.toggle');
          }} 
        />      
      `}</pre>
      <button onClick={doFullScreen}>Fullscreen</button>
      <ReactSummernoteLite id="sample" onInit={handleInit} />
    </div>
  );
};

export const FullScreenToggle: Story = {
  args: {
    id: 'sample',
  },
  render: (args) => <FullScreenToggleComponent {...args} />,
};
