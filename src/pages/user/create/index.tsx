import React, { useState } from 'react';
import App from '../../../App';

interface AuthRequest {
  email: string;
  password: string;
}

const authRequest = {} as AuthRequest;

const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log(e);
  console.log(e.currentTarget);
};

const Create = () => {
  return (
    <App>
      <div id='create'>
        <form className='flex items-center justify-center flex-col' onSubmit={handleOnSubmit}>
          <div>
            <div>
              <label htmlFor='email'>Email</label>
              <input id='email' type='text' />
            </div>

            <div>
              <label htmlFor='password'>Password</label>
              <input id='password' type='password' />
            </div>
          </div>

          <button type='submit'>Cadastrar</button>
        </form>
      </div>
    </App>
  );
};

export default Create;
