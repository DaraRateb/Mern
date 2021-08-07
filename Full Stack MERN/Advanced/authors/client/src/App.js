import {useState} from 'react';
import './App.css';
import { Router } from '@reach/router';
import Main from './views/Main';
import Create from './views/Create';
import Update from './views/Update';

function App() {

  return (
    <div className="App">
<Router>
  <Main path="/" />
  <Create path="/new" />
  <Update path="/edit/:id"/>

    
</Router>

    </div>
  );
}

export default App;
