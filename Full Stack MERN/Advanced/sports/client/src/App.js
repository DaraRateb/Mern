import './App.css';
import {useState} from 'react'
import { Router } from '@reach/router';
import Main from './views/Main';
import Create from './views/Create';
import Update from './views/Update';
import Details from './views/Details';

function App() {
  const [editObj, setEditObj] = useState(
    {firstname:"",
      lastname:"",
      sport: "",
      team: ""
  });
  const takeObj =(obj)=>{
    setEditObj(obj);
  }
  console.log("editObj")
  console.log(editObj)
  return (
    <div className="App">
 <Router>
   <Main path="/" passObj={takeObj}/>
   <Create path="/new" />
   <Details path="/:id" />
   <Update path="/edit/:id" passedObj={editObj}/>

    
 </Router>

    </div>
  );
}

export default App;