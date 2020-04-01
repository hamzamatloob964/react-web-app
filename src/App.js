//import React from 'react';
import React, { useState, useEffect } from 'react';
//import './App.css';
import Home from './components/home';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

export default function App() {

  return (
    <Router>
      <Route path='/' exact component={Home}></Route>
    </Router>
  );
}
//export default App;
