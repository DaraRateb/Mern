import React, {useState} from 'react';
import Tabbutton from './components/Tabbutton';
import Showtab from './components/Showtab';
import './App.css';

function App() {
  const [tab,setTab] = useState("");
  const newContent = (content) => {
    setTab(content);
  }
  return (
    <div className="App">
 <Tabbutton tab={newContent} />
 <Showtab content={tab}/>
    </div>
  );
}

export default App;
