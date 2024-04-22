import StatusSelect from "../components/StatusSelect.tsx";
import CharacterCard from "../components/CharacterCard.tsx";
import {Character} from "../App.tsx";
import {ChangeEvent, useEffect, useState} from "react";
import axios from "axios"


type InfoType = {
    prev: string | null,
    next: string | null
    pageCount: number
}

export default function StartPage() {

    const [characters, setCharacters] = useState<Character[]>([])
    const [input, setInput] = useState<string>("")
    const [status, setStatus] = useState<string>("All")
    const [info, setInfo] = useState<InfoType>({prev: null, next: null, pageCount: 0})
    const [page, setPage] = useState<number>(1)

    function handleOnChangeInput(event: ChangeEvent<HTMLInputElement>) {
        setInput(event.target.value)
    }

    function handleOnSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        setStatus(event.target.value)
    }

    function pageUp() {
        if (info.next) {
            setPage(page +1)
        }
    }

    function pageDown() {
        if (info.prev) {
            setPage(page -1 )
        }
    }


    function getCharacters(page: number) {
        axios.get("https://rickandmortyapi.com/api/character?page=" + page ).then(response => {

            setInfo({next: response.data.info.next, prev: response.data.info.prev, pageCount: response.data.info.pages})
            setCharacters(response.data.results)

        })
    }

    useEffect(() => {getCharacters(page)}, [page])

    return <>
        <header>
            <div>


            <input type={"text"} onChange={handleOnChangeInput} value={input}/>
            <StatusSelect status={status} onChange={handleOnSelectChange} />
            </div>
            <nav>
<p>Page {page} / 42</p>
            <button onClick={pageDown}>Prev</button> / <button onClick={pageUp}>Next</button>
            </nav>
        </header>

    <ul>
        {characters.filter(character => { return character.status === status || status === "All" })
            .filter(character => {
                return character.name.toLowerCase().includes(input.toLowerCase()) // true or false
            }).map((character: Character) => {
                return <CharacterCard key={character.id} character={character} showBackToMainPage={false} />
            })}
    </ul>
        </>
}