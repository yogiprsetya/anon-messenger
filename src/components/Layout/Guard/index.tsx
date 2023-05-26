import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { FirebaseClient } from 'firebase/client';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';
import { AuthContext } from 'services/auth/context';
import Loading from 'template/Loading';

type Props = {
  children: ReactNode;
};

export const GuardProvider = ({ children }: Props) => {
  const { push } = useRouter();
  const [user, setUser] = useState<Record<string, any> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(FirebaseClient), (state) => {
      if (state) {
        setUser(state);
      } else {
        setUser(null);
        push('/');
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={{ user }}>{loading ? <Loading /> : children}</AuthContext.Provider>;
};
