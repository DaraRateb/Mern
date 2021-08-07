import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const Details = (props) => {
    const {id} = props;
    const [athlete, setAthlete]=useState({});
    useEffect(()=>{
        axios.get('http://localhost:8000/api/sports/'+id)
        .then(res=>{
            setAthlete(res.data);
            console.log(res.data)
    })
        .catch(err=>{
            console.log(err);
        })
    },[])
    return (
        <div>
            <h1>{athlete.firstname} {athlete.lastname}</h1>
            <h2>{athlete.sport}</h2>
            <h2>{athlete.team}</h2>
        </div>
    )
}

export default Details
