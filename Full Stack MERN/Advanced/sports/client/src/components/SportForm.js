import React, { useState } from 'react'
import axios from 'axios';

const SportForm = (props) => {
    const {errors, name1, name2, sprt, tm, successfulfunction}=props;
    const [firstname, setFirstName]=useState(name1);
    const[lastname, setLastName]=useState(name2);
    const[sport, setSport]=useState(sprt);
    const [team,setTeam]=useState(tm);

const handleSubmit =(e)=>{
    e.preventDefault();
    successfulfunction({firstname,lastname, sport, team});

}


    return (
        <div>
            
    <form onSubmit={handleSubmit}>
        {errors? errors.map((eachError)=>{
            return(<p>{eachError}</p>) 
        })
        :""
        }
            <p>
                <label>First Name</label><br/>
                <input type="text" onChange={(e)=>setFirstName(e.target.value)} value={firstname}/>
            </p>
            <p>
                <label>Last Name</label><br/>
                <input type="text" onChange={(e)=>setLastName(e.target.value)} value={lastname}/>
            </p>
            <p>
                <label>Sport</label><br/>
                <input type="text" onChange={(e)=>setSport(e.target.value)} value={sport}/>
            </p>
            <p>
                <label>Team</label><br/>
                <input type="text" onChange={(e)=>setTeam(e.target.value)} value={team}/>
            </p>
            <input type="submit"/>
            
        </form>
        </div>
    )
}
export default SportForm;