import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { firebase } from 'firebase/config';
import { useRouter } from 'next/navigation';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import Loading from 'template/Loading';

type AuthContextType = {
  user: Record<string, any> | null;
  loading: boolean;
};

type Props = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextType | null>(null);
export const useAuthContext = () => useContext(AuthContext) as AuthContextType;

export const GuardProvider = ({ children }: Props) => {
  const { push } = useRouter();
  const [user, setUser] = useState<Record<string, any> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(firebase), (state) => {
      if (state) {
        setUser(state);
        setLoading(false);
      } else {
        setUser(null);
        push('/');
      }
    });

    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={{ user, loading }}>{loading ? <Loading /> : children}</AuthContext.Provider>;
};
