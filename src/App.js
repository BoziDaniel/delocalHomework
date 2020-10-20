import "./App.css";
import { PaletteProvider } from "./Context/PaletteContext";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Palettes from "./Components/Palettes";

function App() {
  return (
    <>
      <Router>
        <PaletteProvider>
          <Route exact path={"/"} component={Palettes}/>
        </PaletteProvider>
      </Router>
    </>
  );
}

export default App;
