import React from "react";

const PaletteCard = (props) => {
  let colors = [];
  for (let color of props.palette.colors) {
    colors.push("#" + color);
  }
  return (
    <div key={props.palette.id}>
      <p>PaletteName: {props.palette.title}</p>
      <p>Creator: {props.palette.userName}</p>
      <p>Date: {props.palette.dateCreated}</p>
      <p>Votes: {props.palette.numVotes}</p>
      <span>
        {colors.map((color) => (
          <div key={color} style={{ background:  color  }}>
            {color}
          </div>
        ))}
      </span>
    </div>
  );
};

export default PaletteCard;
