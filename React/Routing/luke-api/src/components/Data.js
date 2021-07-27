import React from 'react'

const Data = (props) => {
    return (
        <div>
            
            {props.people.length > 0 && props.people.map((people1, index)=>{
                return (<h1>{people1}</h1>)})}
        </div>
    )
}
export default Data