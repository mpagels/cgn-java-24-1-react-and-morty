import "./App.css"

import {Route, Routes} from "react-router-dom";
import StartPage from "./pages/startPage.tsx";
import CharactersPage from "./pages/charactersPage.tsx";


export type Character = {
    id: number,
    image: string,
    status: string,
    gender: string,
    name: string

}

function App() {

  return (

    <>
        <h1>React and Morty</h1>
        <Routes>
            <Route path={"/"} element={<StartPage />} />
            <Route path={"character/:id"} element={<CharactersPage />} />
        </Routes>


    </>
  )
}

export default App
