import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [palettes, setPalettes] = useState([]);
  useEffect(() => {
    const options = {
      url: "http://www.colourlovers.com/api/palettes/new?format=json",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios(options).then((resp) => {
      console.log(resp.data);
      setPalettes(resp.data);
    });
  }, []);
  return (
    <div className="App">
      <h1>ColourLovers.Live</h1>
    </div>
  );
}

export default App;
