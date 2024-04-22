import {Character} from "../App.tsx";

type CharacterProps = {
    character: Character
}
export default function CharacterCard({character}:CharacterProps) {
    return <li key={character.id}>
        <h2>{character.name}</h2>
        <img src={character.image} alt={""} />
        <h3>Gender: {character.gender}</h3>
        <h4>Status: {character.status}</h4>
    </li>
}