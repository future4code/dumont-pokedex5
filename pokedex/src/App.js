import React from "react"
import Router from "./componentes/router"
import GlobalState from "./global/globalState"

function App() {
  return (
    <GlobalState>
      <Router/>
      </GlobalState>
  )
}

export default App;