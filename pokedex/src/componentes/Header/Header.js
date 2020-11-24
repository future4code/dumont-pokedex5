import React from 'react'
import { useHistory } from 'react-router-dom'
import { HeaderDiv, Title } from './styles'


const Header = () => {
    const history = useHistory()

    const goToPokedex = () => {
        history.push('/pokedex')
    }

    const goToList = () => {
        history.push('/')
    }

    return (
        <div>
            {history.location.pathname === '/' ? (
                <HeaderDiv>
                    <button onClick={goToPokedex}>Ir Para Pokedex</button>
                    <Title>Lista de Pokemons</Title>
                    <p></p>
                </HeaderDiv>
            ):""}

            {history.location.pathname === '/pokedex' ? (
                <HeaderDiv>
                    <button onClick={goToList}>Voltar para a Lista de Pokemons</button>
                    <Title>Pokedex</Title>
                    <p></p>
                </HeaderDiv>
            ):""}

            {history.location.pathname === '/details' ? (
                <HeaderDiv>
                    <button onClick={goToList}>Voltar</button>
                    <Title>Nome do Pokemon Selecionado</Title>
                    <button onClick={goToPokedex}>Ir Para Pokedex</button>
                </HeaderDiv>
            ):""}
        </div>
    )
}

export default Header