import cn from 'classnames';
import { useId } from 'react';
import style from './TextField.module.scss';
import { TextFieldType } from './TextField.type';

export const TextField = (props: TextFieldType) => {
  const { className, label, ...restProps } = props;
  const id = useId();

  return (
    <div className={style.field}>
      <label htmlFor={id} className={style.field__label}>
        {label}
      </label>

      <input
        id={id}
        className={cn(style.field__input, className)}
        {...restProps}
      />
    </div>
  );
};
