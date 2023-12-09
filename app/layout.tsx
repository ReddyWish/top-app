import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';

const sans = Open_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '700'] });

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
      <body className={sans.className}>{children}</body>
    </html>
  );
}
