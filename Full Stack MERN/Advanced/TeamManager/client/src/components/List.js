import React from 'react'

const List = (props) => {
    return (
        <div>
                  {props.players.map((player, idx)=>{
                return <p key={idx}>{player.Name}</p>
            })}
        </div>
    )
}

export default List
