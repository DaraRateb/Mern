import React, {useState} from "react";
import Forms from './components/Forms'
import './App.css';


function App() {
  const [state, setState]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
  });
  return (
    <div className="App">
     <Forms inputs={state} setInputs={setState} />
    </div>
  );
}

export default App;
