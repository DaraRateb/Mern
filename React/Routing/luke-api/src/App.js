// import Home from './components/Home';
import './App.css';
import Component1 from './components/Component1';
import Form from './components/Form';
import {useState} from 'react'
import { Router } from '@reach/router';
import { navigate } from '@reach/router' ;

function App() {
  
  const [returnedTypeVal, setReturnedTypeVal] = useState();
  const [returnedId, setReturnedId] = useState();


  const takeData = (typeVal,id)=>{
    setReturnedId(id);
    setReturnedTypeVal(typeVal);
    console.log(returnedTypeVal)
    navigate('/'+typeVal+'/'+id);
  }

  return (
    <div className="App">
      <Form putData={takeData}/>
      <Router>
      
      <Component1 typeVal={returnedTypeVal} cmpId={returnedId} path="/:typeVal/:cmpId" />
      </Router>


    </div>
  );
}

export default App;
