import React, { ReactNode } from 'react';
import Index from './components/header';
import './App.css';
import Header from './components/header';

type Prop = {
  children?: ReactNode;
};

const App = ({ children }: Prop) => {
  return (
    <div id="app">
      <Header logo={'Luan Coêlho de Souza'} />
      {children}
    </div>
  );
};

export default App;
