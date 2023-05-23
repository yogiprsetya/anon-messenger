/* eslint-disable no-unused-vars */
import { LinkProps } from 'next/link';

interface BaseProps {
  variant?: 'primary' | 'secondary';
}

export type ButtonProps = JSX.IntrinsicElements['button'] & {
  href?: undefined;
} & BaseProps;

type AnchorProps = JSX.IntrinsicElements['a'] & {
  href: string;
} & (LinkProps & BaseProps);

export type PolymorphicProps = ButtonProps | AnchorProps;

export type PolymorphicButton = {
  (props: AnchorProps): JSX.Element;
  (props: ButtonProps): JSX.Element;
};

export const isAnchor = (props: PolymorphicProps): props is AnchorProps => props.href !== undefined;

export type RefType = HTMLButtonElement | HTMLAnchorElement;
