import React, { Component } from "react";

export const Terrain = ({ cost, className, ...props }) => {
  return (
    <div className={`terrain__container ${className}`} {...props}>
      <span>cost</span>
    </div>
  );
};
