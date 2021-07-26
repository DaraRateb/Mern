import { Router } from '@reach/router';
import Home from './components/Home';
import Number from './components/Number';
import Hello from './components/Hello';
import Style from './components/Style';
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
            <Home path="/home"/>
            <Number path="/home/:id"/>
            <Hello path="/:word"/>
            <Style path="/:word/:color/:bg"/>
           
        </Router>
    </div>
  );
}

export default App;
