import React from 'react';

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Add from './pages/Add';
import Order from './pages/Order';
import Checkout from './pages/Checkout';

const httpLink = createHttpLink({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return ( 
    <ApolloProvider client={client}>
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/add' component={Add} />
          <Route exact path='/order' component={Order} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/login' component={Login} />
        </Switch>        
      </div>
    </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
