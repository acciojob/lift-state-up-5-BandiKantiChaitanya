import React, { useState } from 'react';
import LoginForm from './Login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Lift State Up Demo</h1>
      {isLoggedIn ? (
        <h1>You are now logged in!</h1>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
