import React, {useState} from 'react'
import SportForm from '../components/SportForm';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const Update = (props) => {
    const {id,passedObj}=props;
    console.log("passedObj")
    console.log(passedObj)
    

    const [Errors, setErrors] =useState([]);
    const onSubmitHandler = (firstname,lastname,sport,team) => {
        axios.put('http://localhost:8000/api/sports/'+id, 
            firstname,
            lastname,
            sport,
            team
        )
            .then(res=>navigate("/"))
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
           <h1>update page {id}</h1>
           <SportForm name1={passedObj.firstname} name2={passedObj.lastname} sprt={passedObj.sport} tm={passedObj.team} errors={Errors} successfulfunction={onSubmitHandler}/>
        </div>
    )
}

export default Update
