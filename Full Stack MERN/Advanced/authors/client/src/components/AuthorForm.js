import React, { useState } from 'react'
import axios from 'axios';

const AuthorForm = (props) => {
    const {errors, name1, successfulfunction, id}=props;
    const [name, setName]=useState(name1);

const handleSubmit =(e)=>{
    e.preventDefault();
    successfulfunction({name});

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
                <label>Name</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} />
            </p>
            <input type="submit"/>
            
        </form>
        </div>
    )
}
export default AuthorForm;
  
     