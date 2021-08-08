import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList';

const Main = () => {
    const [products, setProducts] = useState([])
    const [Errors, setErrors] =useState([]);
    useEffect (()=>{
        axios.get("http://localhost:8000/api/products/" )
        .then(res =>setProducts(res.data)
        );
        
}, [])


const onSubmitHandler = (title,price,description) => {
    axios.post('http://localhost:8000/api/products', 
        title,
        price,
        description
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
        <ProductForm errors={Errors} tit=""  prc="" desc= "" successfulfunction={onSubmitHandler}  />
        <ProductList prd={products}  />
    </div>
)
}

export default Main
