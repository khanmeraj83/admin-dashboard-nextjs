import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSession, signIn, signOut } from 'next-auth/react';

const Navbar = () => {
  const [session, setSession] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchSession = async () => {
      const response = await getSession();
      setSession(response);
    };

    fetchSession();
  }, []);

  return (
    <nav className='bg-gray-800 text-white'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center py-4'>
          <div className='text-xl font-bold'>
            <Link href='/'>Admin Dashboard</Link>
          </div>
          <div className='flex space-x-4'>
            {session && (
              <>
                <Link
                  href='/'
                  className={`p-2 rounded ${
                    router.pathname == '/'
                      ? 'bg-slate-600'
                      : 'hover:bg-slate-700'
                  }`}
                >
                  Dashboard
                </Link>
                <Link
                  href='/products'
                  className={`p-2 rounded ${
                    router.pathname == '/products'
                      ? 'bg-slate-600'
                      : 'hover:bg-slate-700'
                  }`}
                >
                  Products
                </Link>
              </>
            )}
            {!session ? (
              <button onClick={() => signIn()}>Sign in</button>
            ) : (
              <button onClick={() => signOut()}>Sign out</button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
