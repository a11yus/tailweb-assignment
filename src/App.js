// src/App.js
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Login from './components/Login';
import Home from './components/Home';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Provider store={store}>
      <div>
        {isAuthenticated ? <Home /> : <Login onLogin={() => setIsAuthenticated(true)} />}
      </div>
    </Provider>
  );
};

export default App;
