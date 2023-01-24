import React, { ReactNode } from 'react';
import Header from './components/header';
import './App.css';

type Prop = {
  children?: ReactNode;
};

const App = ({ children }: Prop) => {
  return (
    <div id='app' className="m-5">
      <Header />
      {children}
    </div>
  );
};

export default App;
