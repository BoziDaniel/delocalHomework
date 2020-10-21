import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PaletteContext = createContext();
export const PaletteProvider = (props) => {
  const [firstCol, setFirstCol] = useState([]);
  const [secondCol, setSecondCol] = useState([]);
  const [amountToShow, setAmountToShow] = useState(10);

  useEffect(() => {
    const options = {
      url: "http://www.colourlovers.com/api/palettes/new?format=json",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(options).then((resp) => {
      let first = [];
      let second = [];
      for (let i = 0; i < amountToShow; i++) {
        if (i % 2 === 0) {
          second.push(resp.data[i]);
        } else {
          first.push(resp.data[i]);
        }
      }
      setFirstCol(first);
      setSecondCol(second);
      console.log(resp.data);
    });
  }, [amountToShow]);

  return (
    <PaletteContext.Provider
      value={{
        amountToShow,
        setAmountToShow,
        firstCol,
        setFirstCol,
        secondCol,
        setSecondCol,
      }}
    >
      {props.children}
    </PaletteContext.Provider>
  );
};
export default PaletteContext;
