
import React,{Component} from 'react';
import Home from './components/Home';
import Products from './components/Products';
import Market from './components/Market';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import CustomNavbar from './components/CustomNavbar';
function App() {
  return (
     <>
     
     <Router>
      <div>
        <CustomNavbar/>
        <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        
        
        <Route exact path='/Products'>
          <Products/>
        </Route>
        
        
        <Route exact path='/Market'>
          <Market/>
        </Route>
        </Switch>
        
        
        
      </div>
     </Router> 
     </>
    
  );
}

export default App;
