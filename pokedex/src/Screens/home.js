import React, {useState, useEffect, useContext} from "react"
import Header from '../componentes/Header/Header'
import GlobalStateContext from "../global/globalStateContext"
import axios from "axios"
import CardComponent from '../componentes/cardComponent'


function Home() {
  const {states, setters} = useContext(GlobalStateContext)
 
  useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon/").then(response =>{
      setters.setListaPokemon(response.data.results)
    })
  },[])

  console.log(states)

  return (
     <div>
      <Header/>
      {states.listaPokemon &&
        states.listaPokemon.map((pokemon)=> {
          return (
            <CardComponent key={pokemon.name} name={pokemon.name}/>
          )
        })
      }
     </div>
  )
}

export default Home;