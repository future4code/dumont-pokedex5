import HomePage from "../Screens/home"
import Details from "../Screens/details"
import Pokedex from "../Screens/pokedex"
import ErrorPage from "../Screens/errorPage"
import { BrowserRouter, Route, Switch } from "react-router-dom"

function Router() {
    return (
<BrowserRouter>
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
    </BrowserRouter>
 )
}
export default Router;