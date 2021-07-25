import React, {useState } from 'react';
import axios from 'axios';

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);
 
   const showPokemon=(e) => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
           
            .then(response=>{setPokemon(response.data.results)})
    };
    return (
       <div>
            <button  onClick={showPokemon}> Fetch Pokemon</button>
    
        <div>
            {pokemon.length > 0 && pokemon.map((pokemon, index)=>{
                return (<div key={index}>{pokemon.name}</div>)
            })}
        </div>
        </div>
    );
}
export default Pokemon;