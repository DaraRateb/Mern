import React, {useState,useEffect} from 'react'
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import './main.css'
import Nav from '../components/Nav.js';
import DeleteButton from '../components/DeleteButton';



const Main = () => {
    const [players, setPlayers] = useState([])
    useEffect (()=>{
        axios.get("http://localhost:8000/api/players/" )
        .then(res => setPlayers(res.data));
}, [])

const deletehandler = playerId => {
    setPlayers(players.filter(player=> player._id !== playerId))
}
    return (
        <div className="main">
    <Nav />
    <table>
                <thead>  <tr>
                    <th>Player</th>
                    <th>Preferred Position</th>
                    <th>Actions avilable</th>
                </tr>
                </thead>
                <tbody>
                {players.map((eachitem,i)=> {
                    return <tr key={i}>
                        <td>{eachitem.name}</td>
                        <td>{eachitem.position}</td>
                        <td> <DeleteButton id={eachitem._id} removeFromDom={()=>deletehandler(eachitem._id)}/></td>
                    </tr>
                })}
                </tbody>
                
            </table>
  
        </div>
    )
}

export default Main
