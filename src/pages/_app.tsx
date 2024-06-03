import '@/styles/globals.css';

import { SessionProvider } from 'next-auth/react';
import Navbar from '@/components/Navbar';

const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => (
  <SessionProvider session={session}>
    <div className=''>
      <Navbar />
      <main className='p-6'>
        <Component {...pageProps} />
      </main>
    </div>
  </SessionProvider>
);

export default MyApp;

 