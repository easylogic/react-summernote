import 'summernote/dist/summernote-lite';
import 'summernote/dist/summernote-lite.css';
import { Summernote, SummernoteProps } from '@easylogic/react-summernote';

export function ReactSummernoteLite({ children, ...props }: SummernoteProps) {
  return <Summernote {...props}>{children}</Summernote>;
}
