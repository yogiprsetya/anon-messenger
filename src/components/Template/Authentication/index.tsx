import { Alert } from 'core/Alert';
import { Button } from 'core/Button';
import { Text } from 'core/Text';
import { TextField } from 'core/TextField';
import { useRouter } from 'next/navigation';
import { FormEvent, useCallback, useState } from 'react';
import { FirebaseSignin, FirebaseSignup } from 'services/auth';

type Props = {
  title: string;
  type: 'signin' | 'signup';
};

const Authentication = (props: Props) => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleForm = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const HanlderAPI = props.type === 'signin' ? FirebaseSignin : FirebaseSignup;

      HanlderAPI(email, password)
        .then((result) => {
          if (result) {
            router.push('/user');
          }
        })
        .catch((error) => {
          setErrorMsg(error.code);
        });
    },
    [email, password, props.type, router]
  );

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen">
      <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <Text variant="heading-1" className="mb-8">
            {props.title}
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

            <Button type="submit">{props.title}</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
