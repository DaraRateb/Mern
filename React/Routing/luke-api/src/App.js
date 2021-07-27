// import Home from './components/Home';
import './App.css';
import Component1 from './components/Component1';
import Form from './components/Form';
import {useState} from 'react'
function App() {
  
  const [returnedTypeVal, setReturnedTypeVal] = useState();
  const [returnedId, setReturnedId] = useState();


  const takeData = (typeVal,id)=>{
    setReturnedId(id);
    setReturnedTypeVal(typeVal);
    
  }

  return (
    <div className="App">
      {/* <Home path="/"/> */}
      <Form putData={takeData}/>
      <Component1 typeVal={returnedTypeVal} cmpId={returnedId}/>
      

    </div>
  );
}

export default App;
