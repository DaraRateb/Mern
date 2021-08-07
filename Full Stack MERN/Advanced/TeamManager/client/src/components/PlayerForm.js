import React, {useState} from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const PlayerForm = () => {
    const [name, setName]=useState("");
    const [position, setPosition]=useState("");
    const [errors, setErrors]=useState([]);


    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/players', {
            name,
            position,
        })
        .then(res=>navigate("/players/list"))
        .catch(err=>{
        
            const errorResponse = err.response.data.errors; 
            const errorArr = []; 
            for (const key of Object.keys(errorResponse)) { 
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })  
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
        {errors? errors.map((eachError)=>{
            return(<p>{eachError}</p>) 
        })
        :""
        }
                <label>Player Name</label>
                <input type="text"  onChange={(e)=>setName(e.target.value)} value={name}/><br/>
                <label>Prefered Position</label>
                <input type="text" onChange={(e)=>setPosition(e.target.value)} value={position}/><br/>
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default PlayerForm
