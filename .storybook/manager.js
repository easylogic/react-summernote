import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

addons.setConfig({
    theme: create({
        base: 'light',
        brandTitle: 'React Summernote',
        brandUrl: 'https://react-summernote.easylogic.studio'
    })
})