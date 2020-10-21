import React, { useContext } from "react";
import PaletteContext from "../Context/PaletteContext";
import PaletteCard from "./PaletteCard";
import { Col, Row } from "antd";
const Palettes = () => {
  const { firstCol, secondCol } = useContext(PaletteContext);

  return (
    <div>
      <h1>ColourLovers.Live</h1>
      <Row>
        <Col xs={{ span: 11, offset: 1 }}>
          {firstCol !== [] || firstCol !== undefined
            ? firstCol.map((palette) => (
                <PaletteCard key={palette.id} palette={palette} />
              ))
            : null}
        </Col>
        <Col xs={{ span: 11, offset: 1 }}>
          {secondCol !== [] || secondCol !== undefined
            ? secondCol.map((palette) => (
                <PaletteCard key={palette.id} palette={palette} />
              ))
            : null}
        </Col>
      </Row>
      {/* {palettes !== [] || palettes !== undefined
        ? palettes.map((palette) => (
            <PaletteCard key={palette.id} palette={palette} />
          ))
        : null} */}
    </div>
  );
};

export default Palettes;
