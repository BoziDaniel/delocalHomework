import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PaletteContext = createContext();
export const PaletteProvider = (props) => {
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
    <PaletteContext.Provider
      value={{
        palettes,
        setPalettes,
      }}
    >
      {props.children}
    </PaletteContext.Provider>
  );
};
export default PaletteContext;
