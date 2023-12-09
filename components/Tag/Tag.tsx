import {TagProps} from "@/components/Tag/Tag.props";
import styles from './Tag.module.css';
import cn from "classnames";

export const Tag = ({ size='medium', children, color='ghost', href, className, ...props }: TagProps): JSX.Element => {
 return (
   <div className={cn(styles.tag, className, {
     [styles.small]: size == 'small',
     [styles.medium]: size == 'medium',
     [styles.ghost]: color == 'ghost',
     [styles.grey]: color == 'grey',
     [styles.primary]: color == 'primary',
     [styles.green]: color == 'green',
   })}
     {...props}
   >
     { href ? <a href={href}>{children}</a> : <>{children}</> }
   </div>
 );
};
