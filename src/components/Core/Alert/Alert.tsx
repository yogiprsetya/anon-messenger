import cn from 'classnames';
import style from './Alert.module.scss';
import { AlertType } from './Alert.type';

export const Alert = (props: AlertType) => {
  const { children, variant = 'info', className, ...restProps } = props;

  return (
    <div {...restProps} className={cn(style.alert, style[variant], className)} role="alert">
      {children}
    </div>
  );
};
