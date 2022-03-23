import React from 'react';
import './App.css';
import Add from './pages/Add';
import Login from './pages/Login';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Login />
      <Navbar />
      <Add />
    </div>
  );
}

export default App;
