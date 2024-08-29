import React, { useEffect, useId, useState } from 'react';
import * as ReactDOM from 'react-dom/client';
import $ from 'jquery';
import {
  SummernoteProps,
  SummernoteContext,
  SummernotePluginInterface,
  SummernoteCallbackInitProps,
  SummernoteCustomButtonProps,
} from '../types';

export type SummernoteEventNames =
  | 'init'
  | 'blur'
  | 'blurCodeview'
  | 'change'
  | 'enter'
  | 'focus'
  | 'imageUpload'
  | 'keydown'
  | 'keyup'
  | 'mousedown'
  | 'mouseup'
  | 'paste'
  | 'destroy';

export type ISummernoteEvents = {
  [K in `summernote.${SummernoteEventNames}`]: (...args: any[]) => void;
} & {
  [key: string]: (...args: any[]) => void;
};

export interface ISummernotePlugin {
  context: SummernoteContext;
  $: JQueryStatic;
  events?: ISummernoteEvents;
}

export class SummernotePlugin implements ISummernotePlugin {
  context: SummernoteContext;
  $: JQueryStatic;
  constructor(context: SummernoteContext, $: JQueryStatic) {
    this.context = context;
    this.$ = $;
  }

  get lang() {
    return this.context.options.langInfo;
  }
}

export function createSummernotePlugin(name: string, PluginClass: SummernotePluginInterface) {
  const jQuery = $ as any;

  if (jQuery.summernote.plugins[name]) {
    console.warn(`${name} plugin is already exists.`);
  }

  jQuery.extend(jQuery.summernote.plugins, {
    [name]: function (context: SummernoteContext) {
      return new PluginClass(context, jQuery);
    },
  });
}

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

export function setSummernoteLang(langInfo: any) {
  const jQuery = $ as any;

  jQuery.extend(true, jQuery.summernote.lang, langInfo);
}

export function setSummernoteShortcut(...args: any[]) {
  const jQuery = $ as any;

  if (args.length === 1) {
    jQuery.extend(true, jQuery.summernote.options.keyMap, args[0]);
  } else if (args.length === 2) {
    const [pcKeyMap, macKeyMap] = args[0].split(',');
    jQuery.extend(true, jQuery.summernote.options.keyMap, {
      pc: {
        [pcKeyMap]: args[1],
      },
      mac: {
        [macKeyMap || pcKeyMap]: args[1],
      },
    });
  }
}

export function getContainerId(id: string) {
  return `${id}-container`;
}

export function getElement(id: string) {
  return document.getElementById(getContainerId(id));
}

export function Summernote({ value, children, className = '', containerClassName, opt, ...props }: SummernoteProps) {
  const {
    initInvoke,
    onInit,
    onBlur,
    onBlurCodeview,
    onChange,
    onEnter,
    onFocus,
    onImageUpload,
    onKeydown,
    onKeyup,
    onMousedown,
    onMouseup,
    onPaste,
  } = props;

  const callbacks = {
    onInit: (context: SummernoteCallbackInitProps) => {
      if (onInit) onInit(context);
      if (initInvoke) {
        initInvoke((...args: unknown[]) => {
          return context.note.summernote(...args);
        });
      }
    },
    onBlur,
    onBlurCodeview,
    onChange,
    onEnter,
    onFocus,
    onImageUpload,
    onKeydown,
    onKeyup,
    onMousedown,
    onMouseup,
    onPaste,
  };
  const [summernoteId] = useState(props.id || useId());
  useEffect(() => {
    const dialogsInBody = typeof props.dialogsInBody === 'undefined' ? true : props.dialogsInBody;

    const summernoteElement = getElement(summernoteId);

    if (!summernoteElement) {
      console.error(`summernote element is not exists. id: ${summernoteId}`);
      return;
    }

    ($(summernoteElement) as any).summernote({ ...props, callbacks, ...opt, dialogsInBody });

    return () => {
      ($(summernoteElement) as any).summernote('destroy');
    };
  }, [props]);

  return (
    <div className={`react-summernote ${className}`}>
      <div id={`${summernoteId}-container`} className={`react-summernote-container ${containerClassName}`}>
        {value || children}
      </div>
    </div>
  );
}
