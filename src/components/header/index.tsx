import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div>
      <nav className='flex items-center justify-around bg-blue-400 p-3 sm:flex-col rounded'>
        <h1 className='font-bold'>Starting in React</h1>
        <ul className='flex items-center'>
          <li className='mr-2'>
            <Link to='/users'>Users</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Index;
