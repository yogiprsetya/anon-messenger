import { HTMLProps, ReactNode } from 'react';

export interface AlertType extends HTMLProps<HTMLDivElement> {
  variant?: 'info' | 'danger';
  children: ReactNode;
}
