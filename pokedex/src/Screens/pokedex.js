import React, { useContext } from "react"
import Header from '../componentes/Header/Header'
import GlobalStateContext from "../global/globalStateContext"
import CardComponent from '../componentes/cardComponent'
import styled from 'styled-components'

const MainDiv = styled.div `
  display: flex;
  flex-wrap: wrap;
  padding-top: 8vh;
  justify-content:center;
`

function Pokedex() {
  const {states, setters} = useContext(GlobalStateContext)

  return (
    <div>
      <Header/>
      <MainDiv>
       {states.listPokedex &&
        states.listPokedex.map((pokemon)=> {
          return (
            <CardComponent key={pokemon.name} url={pokemon.url} name={pokemon.name} pokemon={pokemon}/>
          )
        })
      }
      </MainDiv>
    </div>
  )
}

export default Pokedex;