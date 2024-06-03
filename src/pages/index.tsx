
import { useEffect, useState } from 'react';
import { getSession} from 'next-auth/react';
import Dashboard from '@/components/Dashboard';

const Home = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const response = await getSession();
      setSession(response);
    };

    fetchSession();
  }, []);

  if (!session) {
    return (
      <div>
        <p>Not signed in</p>
      </div>
    );
  }

  return (
    <div>
      <p>Signed in as {session.user.email}</p>
      <Dashboard />
    </div>
  );
};

export default Home;

