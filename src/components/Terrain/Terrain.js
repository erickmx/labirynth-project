import React from "react";

export const Terrain = ({ cost, texture, id, className, ...props }) => {
  return (
    <div
      className={`terrain__container ${className}`}
      style={{ backgroundColor: texture }}
      {...props}
    >
      <span>{id}</span>
    </div>
  );
};
