
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import Navbar from '@/components/Navbar';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <SessionProvider session={pageProps.session}>
    <div className=''>
      <Navbar />
      <main className='p-6'>
        <Component {...pageProps} />
      </main>
    </div>
  </SessionProvider>
);

export default MyApp;
