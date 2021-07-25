import React, {useState} from 'react';
 


const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);
 
   const showPokemon=(e) => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
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