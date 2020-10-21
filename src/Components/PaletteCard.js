import React from "react";
import { Card, Row, Col } from "antd";

const PaletteCard = (props) => {
  let colors = [];
  for (let color of props.palette.colors) {
    colors.push("#" + color);
  }
  return (
    <div
      key={props.palette.id}
      title={props.palette.title}
      style={{ height: "25%" }}
    >
      <Row style={{ width: "95%" }}>
        <Col span={12} >
          <div>{props.palette.title}</div>
          <div> {props.palette.userName}</div>
          <div> {props.palette.dateCreated.slice(10)}</div>
          <div>Votes: {props.palette.numVotes}</div>
        </Col>
        <Row style={{ width: "95%" }}>
          {colors.map((color) => (
            <div
              key={color}
              style={{ background: color, height: "10vw", width: "20%" }}
            ></div>
          ))}
        </Row>
      </Row>
    </div>
  );
};

export default PaletteCard;
