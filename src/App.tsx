import "./App.css"
import axios from "axios";
import {useEffect, useState} from "react";
import CharacterCard from "./components/CharacterCard.tsx";


export type Character = {
    id: number,
    image: string,
    status: string,
    gender: string,
    name: string

}

function App() {

    const [characters, setCharacters] = useState<Character[]>([])

    function getCharacters() {
        axios.get("https://rickandmortyapi.com/api/character").then(response => setCharacters(response.data.results))
    }

    useEffect(() => {getCharacters()}, [])

  return (

    <>
        <h1>React and Morty</h1>
        <ul>
        {characters.map((character: Character) => {
            return <CharacterCard key={character.id} character={character} />
        })}
        </ul>
    </>
  )
}

export default App
