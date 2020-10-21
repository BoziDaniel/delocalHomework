import React from "react";
import { Row, Col } from "antd";

const PaletteCard = (props) => {
  let colors = [];
  for (let color of props.palette.colors) {
    colors.push("#" + color);
  }
  return (
    <div
      key={props.palette.id}
      title={props.palette.title}
      style={{ height: "30vh" }}
    >
      <Row style={{ width: "95%" }}>
        <Col span={23}>
          <div>
            <b>{props.palette.title}</b>
          </div>
          <div> {props.palette.userName}</div>
          <div> {props.palette.dateCreated.slice(10, 15)}</div>
          <span>
            Views: {props.palette.numViews} Votes: {props.palette.numVotes}
          </span>
          <Row style={{ width: "95%" }}>
            {colors.map((color) => (
              <div
                key={color}
                style={{ background: color, height: "8vw", width: "20%" }}
              ></div>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default PaletteCard;
