import React from "react";

const PaletteCard = (props) => {
  console.log(props.palette);
  return (
    <div key={props.palette.id}>
      <p>PaletteName: {props.palette.title}</p>
      <p>Creator: {props.palette.userName}</p>
      <p>Date: {props.palette.dateCreated}</p>
      <p>Votes: {props.palette.numVotes}</p>
      {/* <span>
        {props.palette.colors.map((color) => (
          <div key={color} style={{ background: rgba({color}) }}>{color}</div>
        ))}
      </span> */}
    </div>
  );
};

export default PaletteCard;
