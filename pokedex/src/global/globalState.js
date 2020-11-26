import React, { useState, useEffect } from "react"
import axios from "axios"
import GlobalStateContext from "./globalStateContext"

function GlobalState(props) {

    const [listaPokemon,setListaPokemon] = useState({})
    const [listPokedex,setListPokedex] = useState({})

   

    const states = {listaPokemon,listPokedex}
    const setters = {setListaPokemon,setListPokedex}
    const data = {states,setters}
    

  return(
      <GlobalStateContext.Provider value={data}>
            {props.children}
      </GlobalStateContext.Provider>
  )
}

export default GlobalState