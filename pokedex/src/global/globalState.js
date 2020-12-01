import React, { useState, useEffect } from "react"
import axios from "axios"
import GlobalStateContext from "./globalStateContext"

function GlobalState(props) {


    const [linkToGetDetails,setLinkToGetDetails] = useState("")
    const [listaPokemon,setListaPokemon] = useState([])
    const [listPokedex,setListPokedex] = useState([])

    const states = {listaPokemon,listPokedex,linkToGetDetails}
    const setters = {setListaPokemon,setListPokedex,setLinkToGetDetails}
    const data = {states,setters}
    
  return(
      <GlobalStateContext.Provider value={data}>
            {props.children}
      </GlobalStateContext.Provider>
  )
}

export default GlobalState