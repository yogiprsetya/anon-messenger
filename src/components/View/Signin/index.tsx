import { Alert } from 'core/Alert';
import { Button } from 'core/Button';
import { Text } from 'core/Text';
import { TextField } from 'core/TextField';
import { FirebaseError } from 'firebase/app';
import { useRouter } from 'next/navigation';
import { FormEvent, useCallback, useState } from 'react';
import { FirebaseSignin } from 'services/auth';

const Signin = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleForm = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const { error, result } = await FirebaseSignin(email, password);

      if (error instanceof FirebaseError) {
        setErrorMsg(error.code);
      }

      if (result) {
        router.push('/users');
      }
    },
    [email, password, router]
  );

  return (
    <section className="bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen">
        <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <Text variant="heading-1" className="mb-8">
              Sign in
            </Text>

            <form onSubmit={handleForm}>
              <TextField
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                placeholder="example@mail.com"
                className="mb-4"
              />

              <TextField
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                placeholder="password"
                className="mb-8"
              />

              {!!errorMsg && (
                <Alert variant="danger" className="mb-4">
                  {errorMsg}
                </Alert>
              )}

              <Button type="submit">Sign in</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
