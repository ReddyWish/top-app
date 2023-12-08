import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface TextProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  size: 'xs' | 's' | 'm' | 'l';
  children: ReactNode;
}