/* eslint-disable react/display-name */
import cn from 'classnames';
import Link from 'next/link';
import { ForwardedRef, forwardRef } from 'react';
import style from './Button.module.scss';
import { ButtonProps, PolymorphicButton, PolymorphicProps, RefType, isAnchor } from './Button.type';

export const Button = forwardRef<RefType, PolymorphicProps>((props, ref) => {
  const { children, variant = 'primary', className, ...restProps } = props;

  const styleBuilder = cn(style.btn, style[variant], className);

  if (isAnchor(props)) {
    const { href, as, replace, scroll, shallow, passHref, prefetch, locale } = props;
    const linkProps = {
      href,
      as,
      replace,
      scroll,
      shallow,
      passHref,
      prefetch,
      locale
    };

    return (
      <Link {...linkProps} className={styleBuilder}>
        {children}
      </Link>
    );
  }

  return (
    <button
      {...(restProps as ButtonProps)}
      ref={ref as ForwardedRef<HTMLButtonElement>}
      type={props.type ?? 'button'}
      className={styleBuilder}
    >
      {children}
    </button>
  );
}) as PolymorphicButton;
