import '@/styles/global.css';
import type { AppProps } from 'next/app';
import { DM_Sans } from '@next/font/google';

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  style: 'normal',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={dmSans.className}>
      <Component {...pageProps} />
    </div>
  );
}
