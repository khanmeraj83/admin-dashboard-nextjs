import { useSession, signIn } from 'next-auth/react';
import { useEffect, ComponentType } from 'react';


type WithAuthProps = {
  // you can add any additional props that the wrapped component might receive
};

const withAuth = <P extends WithAuthProps>(WrappedComponent: ComponentType<P>) => {
  const WithAuthComponent = (props: P) => {
    const { data: session, status } = useSession();

    useEffect(() => {
      if (status === 'loading') return;
      if (!session) signIn();
    }, [session, status]);

    if (status === 'loading' || !session) {
      return <p>Loading...</p>;
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuthComponent;
};

export default withAuth;
