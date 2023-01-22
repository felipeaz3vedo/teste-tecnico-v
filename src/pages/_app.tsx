import type { AppProps } from 'next/app';
import { Layout } from '@/components/Layout';
import { DM_Sans } from '@next/font/google';
import '../styles/global.css';

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  style: 'normal',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={dmSans.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
