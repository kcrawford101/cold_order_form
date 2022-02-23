import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Add from './pages/Add';
import Order from './pages/Order';
import Submit from './pages/Submit';



function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route path='/'>
            <Dashboard />
          </Route>
        </Switch>
        
        {/* <Add /> */}
        {/* <Order /> */}
        {/* <Submit /> */}
      </div>
    </div>
    </Router>
  );
}

export default App;
