import React, {useState, useEffect} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PetsIcon from '@material-ui/icons/Pets';
import EcoIcon from '@material-ui/icons/Eco';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import CardComponentCSS from './cardComponent.css';
import axios from 'axios'
import { Route } from 'react-router-dom';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    grid: "auto/repeat(auto-fit, minmax(250px, 400px))",
    justifyContent: "space-evenly",
  },
  root: {
    margin: "30px"
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
    background: "linear-gradient(orangered 39%, #353535 20%, white 55%)",
    border: "3px solid #353535"
  },
  img: {
    maxWidth: "100%"
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
    position: "relative",
    color: "white",
    background: "#000000a6",
    width: "fit-content",
    margin: "auto",
    borderRadius: "10px",
    padding: "5px",
  },
  info: {
    display: "flex",
    justifyContent: "space-between"
  },
  viewMore: {
    color: "white",
    bottom: "90px",
    margin: "auto",
    position: "relative",
    maxWidth: "100px",
    background: "orangered",
    borderRadius: "20px",
    justifyContent: "center",
    boxShadow: "6px 3px 12px -3px black",
    transition: ".25s linear"
  },
  button: {
    color: "white",
    fontWeight: "bold",
  }
});

function CardComponent(props) {
  const theme = useTheme();
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [pokemonImage, setPokemonImage] = useState('')
  const addToPokedex = () => {
    window.alert("Adicionado")
  }
  const removeFromPokedex = () => {
    window.alert("Removido")
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
    <div className={classes.container}>
    <Card className={classes.root}>
      <CardContent>
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
          {props.name}
        </Typography>
          <KeyboardArrowLeftIcon className={classes.arrowLeft} />
          <img className={classes.img} src={pokemonImage} />
          <KeyboardArrowRightIcon className={classes.arrowRight} />
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          Charizard
        </Typography> */}
        {/* <Typography className={classes.pos} color="textSecondary">
          Water
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
        </div>

        <CardActions className={classes.viewMore}>
          <Button size="small">Ver Detalhes</Button>
          <Route exact path='/'>
              <Button onClick={addToPokedex} size="small">Adicionar na Pokedex</Button>
            </Route>
          <Route exact path='/pokedex'>
              <Button onClick={removeFromPokedex} size="small">Remover da Pokedex</Button>
          </Route>
        </CardActions>
      </CardContent>
    </Card>
    {/* <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>

        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>

        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>

        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions className={CardComponentCSS.div}>
        <Button className={classes.button} size="small">Learn More</Button>
      </CardActions>
    </Card> */}
    </div>
  );
}

export default CardComponent;