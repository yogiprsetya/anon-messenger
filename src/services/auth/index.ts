import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { firebase } from 'firebase/config';

const auth = getAuth(firebase);

export default async function signUp(email: string, password: string) {
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
