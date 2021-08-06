import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import AuthorForm from '../components/AuthorForm'


const Update = () => {
    const [Name, setName] = useState(""); 
    const [Errors, setErrors] =useState([]);

    const onSubmitHandler = (name) => {
        axios.put('http://localhost:8000/api/authors/'+id, 
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
            <h1>Favorite Authors</h1>
        <AuthorForm errors={Errors} name1="" successfulfunction={onSubmitHandler} />
    </div>
    )
}

export default Update
