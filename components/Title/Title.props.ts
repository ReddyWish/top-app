import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface TitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  size: 'small' | 'medium' | 'large';
  children: ReactNode;
}