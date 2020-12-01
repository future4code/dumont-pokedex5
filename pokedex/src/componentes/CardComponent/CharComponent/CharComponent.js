import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PetsIcon from '@material-ui/icons/Pets';
import EcoIcon from '@material-ui/icons/Eco';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import CharComponentCSS from './CharComponent.css';

const useStyles = makeStyles({
  root: {
    flexDirection: "column",
    display: "flex",
    position: "relative",
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
    margin: "auto",
    width: "100%",
    maxWidth: "260px",
    position: "relative",
    justifyContent: "center",
    display: "flex",
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
});

function CardComponent(props) {
  const theme = useTheme();
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={CharComponentCSS} >
      <CardContent className={classes.root}>
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
          <img className={classes.img} src={props.pokemonImage} />
          <KeyboardArrowRightIcon className={classes.arrowRight} />
        </div>
      </CardContent>
    </Card>
  );
}

export default CardComponent;