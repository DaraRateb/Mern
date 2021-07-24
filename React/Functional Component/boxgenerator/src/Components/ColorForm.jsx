import React,{useState} from 'react'

export const ColorForm = () => {
    const [color, setColor] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
    };
    return (
        <form onSubmit={ handleSubmit }>
         <div>
                <label>Color: </label> 
                <input type="text" onChange={ (e) => setColor(e.target.value) } />
            </div>
        <input type="submit" value="Add" />
    </form>
    );
};
export default ColorForm;
