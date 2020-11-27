import React, { useContext } from "react"
import Header from '../componentes/Header/Header'
import GlobalStateContext from "../global/globalStateContext"
import CardComponent from '../componentes/cardComponent'

function Pokedex() {
  const {states, setters} = useContext(GlobalStateContext)

  return (
     <div>
       <Header/>
       {states.listPokedex &&
        states.listPokedex.map((pokemon)=> {
          return (
            <CardComponent key={pokemon.name} name={pokemon.name} pokemon={pokemon}/>
          )
        })
      }
     </div>
  )
}

export default Pokedex;