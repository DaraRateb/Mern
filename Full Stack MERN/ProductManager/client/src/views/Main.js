import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
const Main =() => {
    const [products, setProducts] = useState([]);
    const [ message, setMessage ] = useState("Loading...")
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then(res=>{
            setProducts(res.data);
            setLoaded(true);
        });

    }, []);
    return (
        <div>
            <h2>Message from the backend: {message}</h2>
            <ProductForm/>
            <hr/>
            <h2>all</h2>
            {loaded && <ProductList products={products}/>}

        </div>
    )
}
export default Main;