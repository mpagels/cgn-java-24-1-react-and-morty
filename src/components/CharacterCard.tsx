import {Character} from "../App.tsx";
import {Link} from "react-router-dom";

type CharacterProps = {
    character: Character
    showBackToMainPage: boolean
}
export default function CharacterCard({character, showBackToMainPage}:CharacterProps) {
    return <li key={character.id}>
        <h2>{character.name}</h2>
        <img src={character.image} alt={""} />
        <h3>Gender: {character.gender}</h3>
        <h4>Status: {character.status}</h4>
        {showBackToMainPage ? <Link to={"/"}>Got back to main page </Link> :
        <Link to={"/character/" + character.id}>Show characters detail page</Link>}
    </li>
}