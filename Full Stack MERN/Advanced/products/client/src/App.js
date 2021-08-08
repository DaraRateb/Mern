import { Router } from '@reach/router';
import './App.css';
import Main from './views/Main';
import Details from './views/Details';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <Router>
      <Main path="/" />
      <Details path="/details/:id" />
      <Update path="/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
