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

    const removeFromDom = productId => {
        setProducts(products.filter(products => products._id !== productId));
    }
    return (
        <div>
            <h2>Message from the backend: {message}</h2>
            <ProductForm/>
            <hr/>
            {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}

        </div>
    )
}
export default Main;