import { signIn, useSession } from 'next-auth/react';
import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/router';

const SignIn: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/');
    }
  }, [session, router]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signIn('credentials', {
      redirect: true,
      username,
      password,
    });
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <form onSubmit={handleSubmit} className='bg-white p-6 rounded shadow-md'>
        <h2 className='mb-4 text-xl font-bold'>Sign In</h2>
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
          className='mb-2 p-2 border border-gray-300 rounded w-full'
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          className='mb-4 p-2 border border-gray-300 rounded w-full'
        />
        <button
          type='submit'
          className='bg-blue-500 text-white p-2 rounded w-full'
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
