import axios from 'axios'
import React from 'react'
import {useState,useEffect} from 'react'
import Show from "./Show"
const Component1 = (props) => {

    const [getData,setData] = useState([]);
    const [error,setErr]=useState("");
    
    
    useEffect(() => {
        // console.log(props.typeVal)
        
        axios.get("https://swapi.dev/api/"+props.typeVal+"/"+props.cmpId).
        then(resopnse=>{
       
        setData(resopnse.data);
        setErr("");
    })
    .catch(err=>setErr(err))
    }, [props.typeVal,props.cmpId]);//why warning? when i props.typeval is mentioned i can't retrieve data by changing the id only
    

    return (
        <div>
            {(!error)? <Show results={getData} info={props.typeVal}/>
            : <div><p>These aren't the droids you're looking for</p>
            <img src="../logo192.png" alt="error pic"></img></div>}
         
        </div>
    )
}

export default Component1
