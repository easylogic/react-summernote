import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'summernote/dist/summernote-bs4';
import 'summernote/dist/summernote-bs4.css';
import { Summernote, SummernoteProps } from '@easylogic/react-summernote';

export function ReactSummernoteBS4({ children, ...props }: SummernoteProps) {
  return <Summernote {...props}>{children}</Summernote>;
}
