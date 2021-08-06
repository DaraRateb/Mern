import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Details from './views/Details';
import Update from './views/Update';


import './App.css';

function App() {
  return (
   
    <div className="App">
      <Router>
        <Main path="products/"/>
        <Details path="products/:id" />
        <Update path="products/:id/edit"/>
      </Router>
    </div>
  );
 
}

export default App;
