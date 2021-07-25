import React, {useState} from 'react';
import './App.css';
import ColorForm from "./components/ColorForm";
import BoxDisplay from "./components/BoxDisplay";

function App() {
  const [Box, setBox] = useState([]);
    
  const createnewBox = ( newBox ) => {
      setBox( [...Box,newBox]);
  }
  return (
    <div className="App">
     <ColorForm onSend={createnewBox}/>
     <BoxDisplay color={Box}/>
    </div>
  );
}

export default App;
