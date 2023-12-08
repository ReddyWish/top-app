import {TextProps} from "@/components/Text/Text.props";
import styles from './Text.module.css';
import cn from "classnames";

export const Text = ({ size, children, className, ...props }: TextProps): JSX.Element => {
 return (
   <p className={cn(styles.paragraph, className, {
     [styles.xs]: size == 'xs',
     [styles.s]: size == 's',
     [styles.m]: size == 'm',
     [styles.l]: size == 'l'
   })}
     {...props}
   >
     {children}
   </p>
 );
};
