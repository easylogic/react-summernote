import React from 'react';
import * as ReactDOM from 'react-dom/client';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'summernote/dist/summernote-bs4';
import 'summernote/dist/summernote-bs4.css';
import {
  Summernote,
  SummernoteProps,
  SummernoteContext,
  SummernoteCustomButtonProps,
} from '@easylogic/react-summernote';

interface ButtonProps {
  container?: string;
  tooltip?: string;
  contents?: string;
  click?: () => void;
}

export function createSummernoteButton(opt: SummernoteCustomButtonProps): any {
  return (context: SummernoteContext) => {
    let buttonProps: ButtonProps = {
      container: opt.container || 'body',
      tooltip: opt.tooltip || 'sample',
    };

    if (opt.title && !opt.element) {
      buttonProps.contents = opt.title;
      buttonProps.click = () => {
        opt?.onClick?.(context);
      };
      return context.ui.button(buttonProps).render();
    } else {
      const button = context.ui.button(buttonProps);
      const el = button.render(); // return button as jquery object

      if (opt?.element) {
        const props = { context, ...opt.props };
        ReactDOM.createRoot(el[0]).render(React.createElement(opt.element, props));
      }

      return el;
    }
  };
}

export function ReactSummernoteBS4({ children, ...props }: SummernoteProps) {
  return <Summernote {...props}>{children}</Summernote>;
}
