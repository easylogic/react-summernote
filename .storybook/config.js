import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react'
import { withInfo } from '@storybook/addon-info';

configure(require.context('../src', true, /\.stories\.(js|mdx|tsx)$/), module)
addDecorator(withInfo); 
addDecorator(withKnobs)