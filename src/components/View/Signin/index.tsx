import { Button } from 'core/Button';
import { TextField } from 'core/TextField';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { FirebaseSignin } from 'services/auth';

const Signin = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { result, error } = await FirebaseSignin(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push('/users');
  };

  return (
    <div>
      <div>
        <h1 className='mb-8'>Sign up</h1>

        <form onSubmit={handleForm} className='form'>
          <TextField
            label='Email'
            onChange={(e) => setEmail(e.target.value)}
            required
            type='email'
            placeholder='example@mail.com'
            className='mb-4'
          />

          <TextField
            label='Password'
            onChange={(e) => setPassword(e.target.value)}
            required
            type='password'
            placeholder='password'
            className='mb-8'
          />

          <Button type='submit'>Sign up</Button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
