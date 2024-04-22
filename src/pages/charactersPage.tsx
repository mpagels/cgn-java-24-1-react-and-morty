import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Character} from "../App.tsx";
import CharacterCard from "../components/CharacterCard.tsx";
import axios from "axios";


export default function CharactersPage() {

    const [character, setCharacter] = useState<Character>({})

    const params = useParams()

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character/" + params.id).then(response => {
            setCharacter(response.data)
        })
    }, [params.id])

    return <><CharacterCard character={character} showBackToMainPage={true} /></>
}