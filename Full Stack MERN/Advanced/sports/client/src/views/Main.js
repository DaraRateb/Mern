import React, {useEffect, useState} from 'react'
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import DeleteButton from '../components/DeleteButton';
import EditButton from '../components/EditButton';
const Main = (props) => {
    const {passObj} = props;
    const [athlete, setAthlete] = useState([])
    useEffect (()=>{
        axios.get("http://localhost:8000/api/sports/" )
        .then(res => setAthlete(res.data));
}, [])

const deletehandler = sportId => {
    setAthlete(athlete.filter(sport=> sport._id !== sportId))
}
    
    return (
        <div>
            <h1>Athletes </h1>
            <Link to="/new">Add an athlete</Link>
            <ul>
                {athlete.map((eachitem,i)=> {
                    return(
                    <li>
                    <Link to={"/"+eachitem._id} key={i}>{eachitem.firstname}</Link>
                    <EditButton path={"/edit/"+eachitem._id} onClick={passObj(eachitem)}/>
                    <DeleteButton id={eachitem._id} removeFromDom={()=>deletehandler(eachitem._id)}/>
                    </li>)
                })}
                </ul>
        
        </div>
    )
}

export default Main