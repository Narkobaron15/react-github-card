import React from 'react';
import { useState } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Card from './components/card';

const DEFAULT_USER = "Narkobaron15";

function App() {
  const [username, setUserName] = useState('');

  return (
    <>
      <header>
        <h1>Cards</h1>
      </header>
      <main>
        <input type='text' placeholder='@username'
          onChange={(e) => setUserName(e.target.value)} />
        <Card username={username.length === 0 ? DEFAULT_USER : username} />
      </main>
      <ToastContainer/>
    </>
  );
}

export default App;
