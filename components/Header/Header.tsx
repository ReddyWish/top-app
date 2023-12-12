import {HeaderProps} from "@/components/Header/Header.props";
import styles from './Header.module.css';
import BlogLogo from './blog-logo.svg';


export const Header = ({ ...props }: HeaderProps): JSX.Element => {
 return (
   <div { ...props } className={styles.header}>
     <h1 className={styles.name}>.my_blog</h1>
    <div>
      <BlogLogo/>
    </div>
   </div>
 );
};
