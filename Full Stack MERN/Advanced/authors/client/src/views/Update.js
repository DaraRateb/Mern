import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import AuthorForm from '../components/AuthorForm'


const Update = (props) => {
    const {id}=props;
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    const [Errors, setErrors] =useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setAuthor(res.data);
                console.log(res.data);
                setLoaded(true);
            })
    }, [])

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
            {loaded && (
        <AuthorForm errors={Errors} name1={author.name} successfulfunction={onSubmitHandler} />
            )}
        </div>
    )
}

export default Update
