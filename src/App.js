import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { AuthProvider } from './Auth'
 

function App() {
  return (
    <div className="App">

        <AuthProvider>
          <Router>
            <Route exact path="/"  component={Home} ></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>

          </Router>
          </AuthProvider>

    </div>
  );
}

export default App;
