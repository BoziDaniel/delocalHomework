import React, { useContext } from "react";
import PaletteContext from "../Context/PaletteContext";
import PaletteCard from "./PaletteCard";
const Palettes = () => {
  const { palettes } = useContext(PaletteContext);
  return (
    <div>
      <h1>ColourLovers.Live</h1>
      {palettes !== [] || palettes !== undefined
        ? palettes.map((palette) => (
            <PaletteCard key={palette.id} palette={palette} />
          ))
        : null}
    </div>
  );
};

export default Palettes;
