import React from 'react'
import './App.css';
import Header from "./Header";
import Home from "./Home.js";
import Products from './product.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
 

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
            <Home />
            <Header/>
             
          </Route>
        </Switch>
      </Router>
    </div>
  );

}

export default App;
