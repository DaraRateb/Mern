import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const DeleteButton = (props) => {
    const { removeFromDom, id} = props;
    
   const deleteplayer =()=>{
        axios.delete("http://localhost:8000/api/players/"+id )
        .then(res =>  removeFromDom());
}


    return (
        <div>
            <button onClick={deleteplayer}>Delete</button>
        </div>
    )
}

export default DeleteButton;