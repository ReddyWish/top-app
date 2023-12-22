'use client';
import {HeaderProps} from "@/components/Header/Header.props";
import styles from './Header.module.css';
// import BlogLogo from './blog-logo.svg';
import React, {useContext} from "react";
import {LogoContext} from "@/components/LabelContext/label.context";
import Link from "next/link";


export const Header = ({...props}: HeaderProps): JSX.Element => {
  const { BlogLogo } = useContext(LogoContext);
  return (
    <div {...props} className={styles.header}>
      <h1 className={styles.name}>.my_blog</h1>
      <Link href='https://github.com/ReddyWish'>
        <BlogLogo/>
      </Link>
    </div>
  );
};
