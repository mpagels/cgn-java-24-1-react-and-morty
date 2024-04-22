import "./App.css"
import axios from "axios";
import {ChangeEvent, useEffect, useState} from "react";
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
    const [input, setInput] = useState<string>("")


    function handleOnChangeInput(event: ChangeEvent<HTMLInputElement>) {
        setInput(event.target.value)
    }


    function getCharacters() {
        axios.get("https://rickandmortyapi.com/api/character").then(response => setCharacters(response.data.results))
    }

    useEffect(() => {getCharacters()}, [])

  return (

    <>
        <h1>React and Morty</h1>
        <input type={"text"} onChange={handleOnChangeInput} value={input}/>
        <ul>
        {characters.filter(character => {
            return character.name.toLowerCase().includes(input.toLowerCase()) // true or false
        }).map((character: Character) => {
            return <CharacterCard key={character.id} character={character} />
        })}
        </ul>
    </>
  )
}

export default App
