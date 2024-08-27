import React from 'react';
import * as ReactDOM from 'react-dom/client';
import 'summernote/dist/summernote-lite';
import 'summernote/dist/summernote-lite.css';
import {
  Summernote,
  SummernoteContext,
  SummernoteCustomButtonProps,
  SummernoteProps,
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

    if (opt.title && !opt.element && !opt.render) {
      buttonProps.contents = opt.title;
      buttonProps.click = () => {
        opt?.onClick?.(context);
      };
      return context.ui.button(buttonProps).render();
    } else {
      const button = context.ui.button(buttonProps);
      const el = button.render(); // return button as jquery object
      const props = { context, ...opt.props };

      if (opt?.render) {
        ReactDOM.createRoot(el[0]).render(opt.render(props));
      }

      if (opt?.element && React.isValidElement(React.createElement(opt.element, props))) {
        ReactDOM.createRoot(el[0]).render(React.createElement(opt.element, props));
      }

      return el;
    }
  };
}

export function ReactSummernoteLite({ children, ...props }: SummernoteProps) {
  return <Summernote {...props}>{children}</Summernote>;
}
