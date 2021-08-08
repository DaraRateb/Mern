import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const Details = (props) => {
    const {id} = props;
    const [product, setProduct]=useState({});
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products/'+id)
        .then(res=>{
            setProduct(res.data);
            console.log(res.data)
    })
        .catch(err=>{
            console.log(err);
        })
    },[])
    return (
        <div>
            <h1>Title: {product.title}</h1>
            <h2>Price: {product.price}</h2>
            <h2>Description: {product.description}</h2>
            <button onClick={()=>{navigate ("/edit/"+product._id)}}>Edit</button> 
        </div>
    )
}

export default Details;