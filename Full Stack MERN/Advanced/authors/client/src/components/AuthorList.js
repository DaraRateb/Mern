import React from 'react'
import axios from 'axios';

const AuthorList = (props) => {
    return (
        <div>
            {props.authors.map((author, idx)=>{
                return <p key={idx}>{author.Name}</p>
            })}
        </div>
    )
}

export default AuthorList;