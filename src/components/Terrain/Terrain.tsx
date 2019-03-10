import React, { Component } from "react";

export const Terrain = ({
  cost = 0,
  className = "",
  ...props
}): JSX.Element => {
  return (
    <div className={`terrain__container`} {...props}>
      <span>cost</span>
    </div>
  );
};
