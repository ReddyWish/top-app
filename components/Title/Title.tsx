import {TitleProps} from "@/components/Title/Title.props";
import styles from './Title.module.css';
import cn from 'classnames';

export const Title = ({ size, children, className, ...props }: TitleProps): JSX.Element => {
  switch (size) {
    case "large": return <h1 className={cn(styles.h1, className)} { ...props }>{children}</h1>;
    case "medium": return <h2 className={cn(styles.h2, className)} { ...props }>{children}</h2>;
    case "small": return <h3 className={cn(styles.h3, className)} { ...props }>{children}</h3>;
    default: return <></>;
  }
};
