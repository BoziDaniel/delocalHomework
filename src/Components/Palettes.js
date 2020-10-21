import React, { useContext, useEffect } from "react";
import PaletteContext from "../Context/PaletteContext";
import PaletteCard from "./PaletteCard";
import { Col, Row } from "antd";

const Palettes = () => {
  const {
    firstCol,
    secondCol,
    palettes,
    amountToShow,
    setAmountToShow,
  } = useContext(PaletteContext);

  useEffect(() => {
    window.onscroll = () => {
      if (palettes.length > amountToShow) {
        setAmountToShow(amountToShow + 10);
      }
    };
  }, [
    amountToShow,
    firstCol.length,
    palettes.length,
    secondCol.length,
    setAmountToShow,
  ]);

  return (
    <div>
      <h1>ColourLovers.Live</h1>
      <Row>
        <Col xs={{ span: 11, offset: 1 }}>
          {firstCol !== [] && firstCol !== undefined
            ? firstCol.map((palette) => (
                <PaletteCard key={palette.id} palette={palette} />
              ))
            : null}
        </Col>
        <Col xs={{ span: 11, offset: 1 }}>
          {secondCol !== [] && secondCol !== undefined
            ? secondCol.map((palette) => (
                <PaletteCard key={palette.id} palette={palette} />
              ))
            : null}
        </Col>
      </Row>
    </div>
  );
};

export default Palettes;
