import type {Metadata} from 'next';
import {Open_Sans} from 'next/font/google';
// import styles from '../page.module.css';
import {LogoContextProvider} from "@/components/LabelContext/label.context";
import {Header} from "@/components";
import './globals.css';

const sans = Open_Sans({subsets: ['latin'], weight: ['300', '400', '500', '700']});

export const metadata: Metadata = {
  title: 'Top-app',
  description: 'Rating application',
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={sans.className}>
    <LogoContextProvider>
      <Header/>
    </LogoContextProvider>
    <div>
      {children}
    </div>
    </body>
    </html>
  );
}
