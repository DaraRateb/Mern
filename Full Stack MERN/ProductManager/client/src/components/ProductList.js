import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
const ProductList = (props) => {
    return (
        <div>
            {props.products.map((product, idx)=>{
        
                return <Link to={`/products/${product._id}`}  key={idx}> {product.title}, {product.price}, {product.description}</Link>
            })}
        </div>
    )
}
export default ProductList;