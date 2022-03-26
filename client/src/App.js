import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
// import Add from './pages/Add';
import Order from './pages/Order';
import Checkout from './pages/Checkout';

function App() {
  return ( 
    <Router>
    <div className="App">
      <div className="content">
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/dashboard' component={Dashboard} />
          {/* <Route exact path='/add' component={Add} /> */}
          <Route exact path='/order' component={Order} />
          <Route exact path='/checkout' component={Checkout} />
        </Switch>        
      </div>
    </div>
    </Router>
    
  );
}

export default App;
