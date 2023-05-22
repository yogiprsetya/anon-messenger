import cn from 'classnames';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import '../styles/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={cn(inter.className, 'bg-gray-900 min-h-screen')}>
      <Component {...pageProps} />
    </main>
  );
}
