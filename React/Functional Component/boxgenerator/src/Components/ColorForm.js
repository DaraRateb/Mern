import React,{useState} from 'react';

const ColorForm = (props) => {
    const [clr, setClr] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSend(clr);
        
    };
    return (
        <form onSubmit={ handleSubmit }>
         <div>
                <label>Color: </label> 
                <input type="text" onChange={ (e) => setClr(e.target.value)}/>
            </div>
        <input type="submit" value="Add" />
    </form>
    );
};
export default ColorForm;
