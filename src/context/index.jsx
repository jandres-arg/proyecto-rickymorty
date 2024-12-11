import { createContext, useState } from "react";



export const CharactersContext= createContext([]);

export default function CharacterProvider({children}) {
    let [character,setCharacter]=useState([]);
    
    const mostrarData=async()=>{
        let infoAPI= await fetch("https://rickandmortyapi.com/api/character")
        .then((resp)=>{return resp.json()})
        .catch((error)=>console.log("error:" +error));
        setData(infoAPI.results)
        }
        mostrarData();
        return(
            <CharactersContext.Provider value={character}>
                {children}
            </CharactersContext.Provider>
        )
}