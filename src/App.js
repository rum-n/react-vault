import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navigation from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Add from './pages/Add';
import AuthContext from './context/auth-context';

function App() {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const login = (token, userId, TokenExpiration) => {
    setToken({ token: token});
    setUserId ({ userId: userId });
  };

  const logout = () => {
    setToken({ token: null });
    setUserId ({ userId: null });
  };

  return (
    <Router>
      <AuthContext.Provider 
      value={{ 
        token: token, 
        userId: userId, 
        login: login, 
        logout: logout 
      }}>
      <Navigation/>
      <Switch>
        <Route path='/' exact component={Home} />
        {token && <Route path='/add-resource' component={Add}/>}
      </Switch>
      <Footer/>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
