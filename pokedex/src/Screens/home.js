import React, {useState, useEffect, useContext} from "react"
import Header from '../componentes/Header/Header'
import GlobalStateContext from "../global/globalStateContext"
import axios from "axios"
import CardComponent from "../componentes/cardComponent"
import styled from 'styled-components'

const MainDiv = styled.div `
  display: flex;
  flex-wrap: wrap;
  padding-top: 8vh;
  justify-content:center;
`

function Home() {
  const {states, setters} = useContext(GlobalStateContext)
 
  useEffect(()=>{

    if(states.listPokedex.length===0) {
      axios.get("https://pokeapi.co/api/v2/pokemon/").then(response =>{
        setters.setListaPokemon(response.data.results)
      })
    }
  },[])


 
  return (
    <div>
      <Header/>
      <MainDiv>
        {states.listaPokemon &&
          states.listaPokemon.map((pokemon)=> {
            return (
              <CardComponent key={pokemon.name} url={pokemon.url} name={pokemon.name} pokemon={pokemon}/>

            )
          })
        }
      </MainDiv>
     </div>
  )
}

export default Home;