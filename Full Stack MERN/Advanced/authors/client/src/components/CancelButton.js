import { navigate } from '@reach/router'
import React from 'react'

const CancelButton = () => {

    const cancelAction =()=>{
        navigate ("/");
    }
    return (
        <div>
            <button onClick={cancelAction}>Cancel</button>
        </div>
    )
}

export default CancelButton
