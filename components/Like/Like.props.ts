import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

export interface LikeProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  location: 'card' | 'page'
  liked?: boolean
  // setClicked?: (clicked: boolean) => void
}