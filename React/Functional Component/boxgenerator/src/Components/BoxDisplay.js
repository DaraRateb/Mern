import React,{useState} from 'react';

export const BoxDisplay = (props) => {
    return (
        <div style = {{ display:'inline-flex'}}>
        {props.color.map( (value, i) =>
        <div key={i} style = {{ backgroundColor:value,
            width:'100px',
            height:'100px',
            }}>{value}</div>
        )
}
         

        </div>
        );
        };


            
    

export default BoxDisplay;