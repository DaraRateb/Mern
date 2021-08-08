import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
// import DeleteButton from './DeleteButton';

const ProductList = (props) => {
    const [products, setProducts] = useState([])
 

    // const deletehandler = Id => {
    //     console.log(products)
    //     setProducts(products.filter(product=> product._id !== Id))
    //     console.log(products)
    // }

    return (
        <div>
            {props.prd.map((product, idx)=>{
                return<div> <Link to={"/details/"+product._id} key={idx}>{product.title}</Link>
                {/* <DeleteButton id={product._id} removeFromDom={()=>deletehandler(product._id)} /> */}
                <br/>
                </div>
            })}
        </div>
    )
}

export default ProductList;