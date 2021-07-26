import React from 'react'

export const Hello = (props) => {
  if(isNaN(+props.word))
  {  return (
        <div>
            <p>The word is {props.word}</p>
        </div>
    )}
    else{
        return(<div>{props.word} is not a word</div>);
    }
}
export default Hello;