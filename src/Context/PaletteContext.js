import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PaletteContext = createContext();
export const PaletteProvider = (props) => {
  const [palettes, setPalettes] = useState([]);
  const [firstCol, setFirstCol] = useState([]);
  const [secondCol, setSecondCol] = useState([]);
  const [amountToShow, setAmountToShow] = useState(10);

  useEffect(() => {
    const options = {
      url: "/api/palettes/new?format=json",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(options).then((resp) => {
      setPalettes(resp.data);
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
        palettes,
        setPalettes,
      }}
    >
      {props.children}
    </PaletteContext.Provider>
  );
};
export default PaletteContext;
