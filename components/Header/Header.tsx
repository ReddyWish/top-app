import {HeaderProps} from "@/components/Header/Header.props";
import styles from './Header.module.css';
import BlogLogo from './blog-logo.svg';
import React from "react";
import Link from "next/link";


export const Header = ({...props}: HeaderProps): JSX.Element => {
  return (
    <div {...props} className={styles.header}>
      <h1 className={styles.name}>.my_blog</h1>
      <Link href='https://github.com/ReddyWish'>
        <BlogLogo/>
      </Link>
    </div>
  );
};
