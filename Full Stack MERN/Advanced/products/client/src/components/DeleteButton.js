import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const DeleteButton = (props) => {
    const { removeFromDom, id} = props;
    
   const deleteproduct =()=>{
        axios.delete("http://localhost:8000/api/products/"+id )
        .then(res =>  removeFromDom());
}


    return (
        <div>
            <button onClick={deleteproduct}>Delete</button>
        </div>
    )
}

export default DeleteButton;