import {TitleProps} from "@/components/Title/Title.props";
import styles from './Title.module.css';

export const Title = ({ size, children }: TitleProps): JSX.Element => {
  switch (size) {
    case "large": return <h1 className={styles.h1}>{children}</h1>;
    case "medium": return <h2 className={styles.h2}>{children}</h2>;
    case "small": return <h3 className={styles.h3}>{children}</h3>;
    default: return <></>;
  }
 // return (
 //   <div className={cn(styles.title, className, {
 //     [styles.small]: size == 'small',
 //     [styles.medium]: size == 'medium',
 //     [styles.ghost]: color == 'ghost',
 //     [styles.grey]: color == 'grey',
 //     [styles.primary]: color == 'primary',
 //     [styles.green]: color == 'green',
 //   })}
 //     {...props}
 //   >
 //     { href ? <a href={href}>{children}</a> : <>{children}</> }
 //   </div>
 // );
};
