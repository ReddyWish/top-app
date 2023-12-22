'use client';
import BlogLogo from '../Header/blog-logo.svg';
import {PropsWithChildren, ReactNode} from "react";
import {createContext} from "react";

export interface LabelContext {
  BlogLogo?: ReactNode;
  children: ReactNode
}

export const LogoContext = createContext({ BlogLogo });

export const LogoContextProvider = ({ children }: PropsWithChildren<LabelContext>) => {
  return (
    <LogoContext.Provider value={{BlogLogo}}>
      {children}
    </LogoContext.Provider>
  );
};