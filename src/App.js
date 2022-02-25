
import React from 'react';
import './App.css'
import { Navbar } from './components/Navbar';
import {BrowserRouter as Router,Route } from 'react-router-dom' ;
import Home from './components/Home';
import Products from './components/Products';
import { Farmerz } from './components/Farmerz';
import Market from './components/Market';
import Contact from './components/Contact';


import { AddFarm } from './components/AddFarm';




function App() {
  return (
    <>
    <Navbar/>
    <Router>
      <Route exact path='/Home' component ={Home} />
      <Route  path='/Products' component ={Products} />
      <Route  path='/Farmerz' component ={Farmerz} />
      <Route  path='/Market' component ={Market} />
      <Route  path='/Contact' component ={Contact} />
    </Router>
    
    </>
  )
}

export default App;
