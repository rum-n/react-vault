import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navigation from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Add from './pages/Add';

function App() {
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/add-resource' component={Add}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
