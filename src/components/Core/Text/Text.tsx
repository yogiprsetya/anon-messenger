import cn from 'classnames';
import style from './Text.module.scss';
import { TextType } from './Text.type';

export const Text = (props: TextType) => {
  const { tag = 'p', children, className, variant = 'body', ...restProps } = props;

  const Element = tag;

  return (
    <Element {...restProps} className={cn(style[variant], className)}>
      {children}
    </Element>
  );
};
