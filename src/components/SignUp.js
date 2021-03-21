import React, { useState } from 'react';
import { signUp } from '../requests/api';

const SignUp = () => {
  const [username, setUsername] = useState('');

  const createUser = async () => {
    const confirmation = await signUp(username);

    if (confirmation) {
      console.log('User created');
    } else {
      console.log('Username already taken');
    }
  };

  return (
    <>
      <h1>Sign Up</h1>
      <form>
        <input
          type="text"
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Enter your Username"
        />
        <button
          type="button"
          onClick={createUser}
        >
          Create Account
        </button>
      </form>
    </>
  );
};

export default SignUp;
