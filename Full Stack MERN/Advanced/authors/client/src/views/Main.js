import React, {useEffect, useState} from 'react'
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import DeleteButton from '../components/DeleteButton';

const Main = () => {
    const [authors, setAuthors] = useState([])
    useEffect (()=>{
        axios.get("http://localhost:8000/api/authors/" )
        .then(res => setAuthors(res.data));
}, [])

const deletehandler = authorId => {
    setAuthors(authors.filter(author=> author._id !== authorId))
}
    
    return (
        <div>
            <h1>Favorite Authors </h1>
            <Link to="/new">Add an Author</Link>
            <h5>We have quotes by: </h5>
            <table>
                <thead>  <tr>
                    <th>Author</th>
                    <th>Actions avilable</th>
                </tr>
                </thead>
                <tbody>
                {authors.map((eachitem,i)=> {
                    return <tr key={i}>
                        <td>{eachitem.name}</td>
                        <td><button onClick={()=>{navigate ("/edit/"+eachitem._id)}}>Edit</button> 
                        <DeleteButton id={eachitem._id} removeFromDom={()=>deletehandler(eachitem._id)}/></td>
                    </tr>
                })}
                </tbody>
                
            </table>
        
        </div>
    )
}

export default Main

