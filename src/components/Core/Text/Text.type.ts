import { HTMLAttributes } from 'react';

export interface TextType extends HTMLAttributes<HTMLElement> {
  tag?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h5'
    | 'h6'
    | 'small'
    | 'p'
    | 'span'
    | 'label'
    | 'legend'
    | 'ul'
    | 'ol'
    | 'address'
    | 'article';
  variant?: 'heading-1' | 'heading-2' | 'body-1' | 'body-2';
}
