import React from 'react'
import Button from '@material-ui/core/Button';

export const Tabbutton = (props) => {
    const taps=["Tap 1","Tap 2","Tap 3"];

    const clickedtab = (e,x,i) =>{
        e.preventDefault();
        props.tab(x+ " was taped");
    }  
    return (
        <div>
               {
                taps.map((value,i)=>{
                    return <Button variant="contained" color="primary" key={i} onClick={(e)=>clickedtab(e,value,i)}>
                    Button {i+1}
                </Button>
                })
            }
        </div>
    )
}
export default Tabbutton;