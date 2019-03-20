import React from "react";
import "./Terrain.scss";
import propTypes from "prop-types";

const Terrain = ({
  cost,
  texture,
  id,
  className,
  isBeggin,
  isEnd,
  ...props
}) => {
  return (
    <div
      className={`terrain__container${className}`}
      style={{ backgroundColor: texture.color }}
      {...props}
    >
      {isBeggin ? "I" : isEnd ? "F" : ""}
    </div>
  );
};

Terrain.propTypes = {
  cost: propTypes.number,
  texture: propTypes.object.isRequired,
  isBeggin: propTypes.bool,
  isEnd: propTypes.bool
};

export { Terrain };
