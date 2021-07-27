import React,{useState, useEffect} from 'react'
import axios from 'axios';
import Data from './Data'
const Home = (props) => {
    const [people, setPeople] = useState(null);
    let typevalue="people";
    let idvalue=1;
    const setType=(e) =>{
        typevalue=e.target.value;
    }
    const setId=(e) => {
        idvalue=e.target.value;
    }
    const searchPeople=(e) => {
        console.log(typevalue, idvalue)
        let newUrl = "https://swapi.dev/api/" +typevalue+ "/" + idvalue; 
        axios.get(newUrl)
                .then(response=>{
                    setPeople(response.data)
                    console.log(people['name'])
        })
    };
    
    return (
        <div>
            <form>
                <label>Search:</label>
                <select onChange={setType} name="search">
                    <option value="people">  People</option>   
                    <option value="planets">  Planets</option> 
                    <option value="starships">  Star Ships</option> 
                </select>
                <label htmlFor="person"> ID: </label>
                <input onChange={setId} type="number" name="person" />
            
            </form>
            <button onClick={searchPeople}>Search</button>
            <div>
                <Data newData={people}/>
            {/* {people.length > 0 && people.map((people, index)=>{
                return (
                    <div key={index}><h2>Name: {people.name}</h2>
                    <p>Height: {people.height}</p>
                    <p>Mass: {people.mass}</p>
                    <p>Hair Color: {people.hair_color}</p>
                    <p>Skin Color: {people.skin_color}</p>
                    </div>
                    )
            })} */}
        </div>
        </div>
    )
}
export default Home;