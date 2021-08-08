import React, { useState } from 'react'
import axios from 'axios';

const ProductForm = (props) => {
    const {errors, tit, desc, prc, successfulfunction}=props;
    const [title, setTitle]=useState(tit);
    const [price, setPrice]=useState(prc);
    const [description, setDescription]=useState(desc);

const handleSubmit =(e)=>{
    e.preventDefault();
    successfulfunction({title,price,description});

}

    return (
        <div>
            
    <form onSubmit={handleSubmit}>
        {errors? errors.map((eachError)=>{
            return(<p>{eachError}</p>) 
        })
        :""
        }
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <input type="submit" value="Create" />
            
        </form>
        </div>
    )
}
export default ProductForm;