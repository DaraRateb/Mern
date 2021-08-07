import React, {useState} from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import SportForm from '../components/SportForm'

const Create = () => {
    const [FirstName, setFirstName]=useState("");
    const [LastName, setLastName]=useState("");
    const [Sport, setSport]=useState("");
    const [Team, setTeam]=useState("");
    

    const [Errors, setErrors] =useState([]);
    const onSubmitHandler = (firstname,lastname,sport,team) => {
        axios.post('http://localhost:8000/api/sports', 
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
            <h2>Create New Athlete</h2>
            <SportForm name1="" name2="" sprt="" tm="" errors={Errors} successfulfunction={onSubmitHandler}/>
        </div>
    )
}

export default Create
