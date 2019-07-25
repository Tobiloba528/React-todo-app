import React, { Component } from 'react';
import './App.css';
import Home from './components/home';
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

class App extends Component {
  state = {  }
  render() { 
    return (
      <div>
        <ToastContainer />
        <Route path="/" component={Home} />
      </div>
    );
  }
}
 
export default App;
