import "./App.css"
import axios from "axios";
import {useEffect, useState} from "react";
function App() {

    const [characters, setCharacters] = useState([])

    function getCharacters() {
        axios.get("https://rickandmortyapi.com/api/character").then(response => setCharacters(response.data.results))
    }

    useEffect(() => {getCharacters()}, [])

  return (

    <>
        <h1>React and Morty</h1>
        <ul>
        {characters.map(character => {
            return <li key={character.id}>
                <h2>{character.name}</h2>
                <img src={character.image} alt={""} />
                <h3>Gender: {character.gender}</h3>
                <h4>Status: {character.status}</h4>
            </li>
        })}
        </ul>
    </>
  )
}

export default App
