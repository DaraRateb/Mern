import React,{useState} from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import AuthorForm from '../components/AuthorForm'

const Create = () => {
    const [Name, setName] = useState(""); 
    const [Errors, setErrors] =useState([]);

    const onSubmitHandler = (name) => {
        console.log(name)
        axios.post('http://localhost:8000/api/authors', 
            name,
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
            <AuthorForm errors={Errors} name1="" successfulfunction={onSubmitHandler}  />
        </div>
    )
}

export default Create;