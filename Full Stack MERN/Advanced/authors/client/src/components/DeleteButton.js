import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const DeleteButton = (props) => {
    const { removeFromDom, id} = props;
    
   const deleteauthor =()=>{
        axios.delete("http://localhost:8000/api/authors/"+id )
        .then(res =>  removeFromDom());
}


    return (
        <div>
            <button onClick={deleteauthor}>Delete</button>
        </div>
    )
}

export default DeleteButton;
