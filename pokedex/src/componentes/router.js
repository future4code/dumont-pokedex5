import HomePage from "../Screens/home"
import Details from "../Screens/details"
import Pokedex from "../Screens/pokedex"
import ErrorPage from "../Screens/errorPage"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

theme = responsiveFontSizes(theme);

function Router() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/pokedex">
          <Pokedex/>
        </Route>
        <Route exact path="/details">
          <Details/>
        </Route>
        <Route>
          <ErrorPage/>
        </Route>
      </Switch>
    </ThemeProvider>
    </BrowserRouter>
  )
}
export default Router;