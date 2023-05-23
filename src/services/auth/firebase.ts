import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  UserCredential
} from 'firebase/auth';
import { FirebaseClient } from 'firebase/client';

const auth = getAuth(FirebaseClient);

export const FirebaseSignup = (email: string, password: string): Promise<UserCredential> => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const FirebaseSignin = (email: string, password: string): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const FirebaseSignout = (): Promise<void> => {
  return signOut(auth);
};
