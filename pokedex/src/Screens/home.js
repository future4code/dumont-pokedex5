import React, {useState, useEffect, useContext} from "react"
import Header from '../componentes/Header/Header'
import GlobalStateContext from "../global/globalStateContext"
import axios from "axios"


function Home() {
  const {states, setters} = useContext(GlobalStateContext)
 
  useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon/").then(response =>{
      setters.setListaPokemon(response)
    })
     },[])

  console.log(states)

 
  return (
     <div>
       <Header/>
         
     </div>
  )
}

export default Home;