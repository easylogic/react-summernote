import React from 'react';
import ReactSummernoteLite from 'src/summernote/ReactSummernoteLite';
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: 'Extension',
  component: ReactSummernoteLite,
  decorators: [withKnobs] // 애드온 적용
};

export const SummernoteDefaultOption = () => <ReactSummernoteLite id="sample" />;

SummernoteDefaultOption.story = {
  name: 'Default',
};