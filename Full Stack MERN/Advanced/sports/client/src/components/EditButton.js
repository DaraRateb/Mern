import React from 'react'
import { Link, navigate } from '@reach/router';

const EditButton = (props) => {
    const {path}=props
    // const liftObj = ()=>{

    // }
    return (
        <>
            <button onClick={()=>{navigate (path) }}>Edit</button> 
        </>
    )
}

export default EditButton
