import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  UserCredential
} from 'firebase/auth';
import { firebase } from 'firebase/config';

const auth = getAuth(firebase);

export const FirebaseSignup = (email: string, password: string): Promise<UserCredential> => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const FirebaseSignin = (email: string, password: string): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const FirebaseSignout = (): Promise<void> => {
  return signOut(auth);
};
