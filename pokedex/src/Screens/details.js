import React, {useContext,useEffect,useState} from "react"
import Header from '../componentes/Header/Header'
import styled from "styled-components"
import GlobalStateContext from "../global/globalStateContext"
import axios from "axios"

const Page = styled.div`
display:flex;
height:100vh;
width:100vw;
`
const UpperImgCard = styled.div`
border:solid black;
height:25vh;
width:25vh;
margin-top:20vh;
margin-right:5vw;
margin-left:15vw;
`
const BottomImgCard = styled.div`
border:solid black;
height:25vh;
width:25vh;
margin-top:10vh;
margin-left:15vw;
`
const Img =styled.img`
height:25vh;
width:25vh;
`
const StatsCard = styled.div`
border:solid black;
height:60vh;
width:15vw;
margin-top:20vh;
margin-right:5vw;
`
const StatsCardTitle = styled.div`
text-align:center;
`
const Type = styled.div`
border:solid black;
height:10vh;
width:30vw;
margin-top:20vh;
text-align:center;
display:flex;
justify-content:space-evenly;
flex-direction:row; 
`
const Moves = styled.div`
border:solid black;
height:45vh;
width:30vw;
margin-top:5vh;
text-align:center;
`
const Body = styled.div`
display:flex;
flex-direction:row;
`

function Details() {

   const {states, setters} = useContext(GlobalStateContext)
   const [pokemonDetails,setPokemonDetails] = useState("")

   useEffect(()=>{
      axios.get(states.linkToGetDetails).then(response =>{
           setPokemonDetails(response)    
      }).catch(error=>{
         console.log("fsdgf",error)
      })
   },[])
   
  return (
   <Page>
      {pokemonDetails &&     
         <Body>
            <div>
               <Header name={pokemonDetails.data.species.name}/>
               <UpperImgCard><Img src={`${pokemonDetails.data.sprites.front_default}`}/></UpperImgCard>
               <BottomImgCard><Img src={`${pokemonDetails.data.sprites.back_default}`}/></BottomImgCard>
            </div>
            <StatsCard>
               <StatsCardTitle>
                  <p>stats</p>
               </StatsCardTitle>
               <p>HP: {pokemonDetails.data.stats[0].base_stat}</p>
               <p>Attack: {pokemonDetails.data.stats[1].base_stat}</p>
               <p>Defense: {pokemonDetails.data.stats[2].base_stat}</p>
               <p>Special Attack: {pokemonDetails.data.stats[3].base_stat}</p>
               <p>Special Defense: {pokemonDetails.data.stats[4].base_stat}</p>
               <p>Speed: {pokemonDetails.data.stats[5].base_stat}</p>
            </StatsCard>
            <div>
               
               <Type>
                  {pokemonDetails.data.types.map((item)=> {
                     <div>
                        <p>type 1: {item.type.name}</p>
                        <p>type 2: {item.type.name}</p>
                     </div>
                  })
                  }
               </Type>

               {/* <Type>
                  <p>type 1: {pokemonDetails.data.types[0].type.name}</p>
                  <p>type 2: {pokemonDetails.data.types[1].type.name}</p>
               </Type> */}
               <Moves>
                  <p>Moves</p>
                     <p>{pokemonDetails.data.moves[0].move.name}</p>
                     <p>{pokemonDetails.data.moves[1].move.name}</p>
                     <p>{pokemonDetails.data.moves[2].move.name}</p>
                     <p>{pokemonDetails.data.moves[3].move.name}</p>
               </Moves>
            </div>
         </Body>
      }
   </Page>
  )
}

export default Details;