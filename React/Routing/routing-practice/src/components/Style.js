import React from 'react'

export const Style = (props) => {
    if(isNaN(+props.word))
    return (
        <div>
            <p style={{backgroundColor:props.bg, color:props.color}}>The word is {props.word}</p>
        </div>
    )
    else
    return(
        <div>
            <p>{props.word} is not a word.</p>
        </div>
    )
}
export default Style