import './App.css';
import Main from './views/Main';
import Game from './views/Game';
import AddPlayer from './views/AddPlayer';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="main">
      <Router>
<Main path="/players/list"/>
<Game path= "/status/game/:id" />
<AddPlayer path="/players/addplayer" />
</Router>

    </div>
  );
}

export default App;
