import CharComponent from './CharComponent/CharComponent';
import React, {useState, useEffect, useContext} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import { Route,useHistory } from 'react-router-dom';
import GlobalStateContext from "../../global/globalStateContext"
import Typography from '@material-ui/core/Typography';
import PetsIcon from '@material-ui/icons/Pets';
import EcoIcon from '@material-ui/icons/Eco';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import CardComponentCSS from './CardComponent.css';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
  root: {
    position: "relative",
    margin: "20px",
  },
  rootContent: {
    display: "grid",
    grid: "auto/repeat(auto-fit, minmax(240px, 340px))",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 10,
  },
  circle: {
    borderRadius: "50%",
    position: "relative",
    border: "3px solid #353535",
    background: "linear-gradient(orangered 46%, #353535 20%, white 59%)",
    width: "100%",
    height: "100%",
  },
  img: {
    margin: "auto",
    width: "100%",
    maxWidth: "260px",
    position: "relative",
    justifyContent: "center",
    display: "flex",
    maxWidth: "300px",
    padding: "65px",
    boxSizing: "border-box",
  },
  arrows: {
    fontSize: "3.5em"
  },
  arrowLeft: {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    color: "#353535",
    fontSize: "4em",
    transition: ".25s linear"
  },
  especie: {
    margin: "0 0 0 auto",
    display: "block",
    width: "fit-content",
  },
  arrowRight: {
    top: "50%",
    position: "absolute",
    transform: "translate(0, -50%)",
    right: "0",
    color: "#353535",
    fontSize: "4rem",
    transition: ".25s linear"
  },
  name: {
    top: "40px",
    color: "white",
    width: "fit-content",
    margin: "auto",
    padding: "5px",
    position: "relative",
    background: "#000000a6",
    borderRadius: "10px",
  },
  info: {
    display: "flex",
    justifyContent: "space-between"
  },
    viewMore: {
      color: "white",
      bottom: "10px",
      padding: "15px 20px",
      position: "absolute",
      maxWidth: "250px",
      background: "orangered",
      boxShadow: "6px 3px 12px -3px black",
      transition: ".25s linear",
      borderRadius: "20px",
      left: "50%",
      transform: "translate(-50%, 0)",
  },
  button: {
    color: "white",
    fontWeight: "bold",
  }
});

function CardComponent(props) {
  const history = useHistory()
  const theme = useTheme();
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  const [pokemonImage, setPokemonImage] = useState('')
  const {states, setters} = useContext(GlobalStateContext)

  const goToDetails = (link) =>{
    setters.setLinkToGetDetails(link)
    history.push('/details')
  }

  const findInPokedex = (pokemon) => {
    const index = states.listPokedex.filter(pokemonLista => pokemonLista === pokemon);
    if (index.length) {
      return true;
    }
  }

  const addToPokedex = (itemToMove) => {
    let newPokedex = [...states.listPokedex]
    newPokedex.push({...itemToMove})

    const index = states.listaPokemon.findIndex((pokemon) => pokemon === itemToMove)
    let newList = [...states.listaPokemon]
    newList.splice(index,1)

    setters.setListPokedex(newPokedex)
    setters.setListaPokemon(newList)
    window.alert(`Adicionado ${itemToMove.name} na Pokedex`)
  }
  
  const removeFromPokedex = (itemToMove) => {
    let newList = [...states.listaPokemon]
    newList.push({...itemToMove})

    const index = states.listPokedex.findIndex((pokemon) => pokemon === itemToMove)
    let newPokedex = [...states.listPokedex]
    newPokedex.splice(index,1)

    setters.setListPokedex(newPokedex)
    setters.setListaPokemon(newList)
    window.alert(`Removido ${itemToMove.name} da Pokedex`)
  }

  useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
    .then((res)=>{
      setPokemonImage(res.data.sprites.front_default)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <Card className={CardComponentCSS, classes.root} >
      <CardContent className={classes.rootContent}>
        <div className={classes.info}>
          <div>
            <EcoIcon />
            <span>Lightning</span>
          </div>

          <div className={classes.especie} >
            <PetsIcon />
            <span>Pikachus</span>
          </div>
        </div>

        <div className={classes.circle}>
          <Typography className={classes.name} variant="h5" component="h2">
            {props.pokemon.name}
          </Typography>
          <KeyboardArrowLeftIcon className={classes.arrowLeft} />
          <img className={classes.img} src={pokemonImage} />
          <KeyboardArrowRightIcon className={classes.arrowRight} />
        </div>
      </CardContent>
      <CardActions className={classes.viewMore}>
        { findInPokedex(props.pokemon) ?
          <Button className={classes.button} onClick={()=>removeFromPokedex(props.pokemon)} size="small">
            Remover da Pokedex
          </Button>
          :
          <Button className={classes.button} onClick={()=>addToPokedex(props.pokemon)} size="small">
            Adicionar na Pokedex
          </Button>
        }
        
        <Button className={classes.button} onClick={()=>goToDetails(props.url)} size="small">
          Ver Detalhes
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardComponent;