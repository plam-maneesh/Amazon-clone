import React from 'react'
import './App.css';
import Header from "./Header";
import Home from "./Home.js";
import Products from './products';
function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
       <Products/>
    </div>
     
  );
}

export default App;
