import { createContext, useContext } from 'react';

type AuthContextType = {
  user: Record<string, any> | null;
};

export const AuthContext = createContext<AuthContextType | null>(null);
export const useAuthContext = () => useContext(AuthContext) as AuthContextType;
