import React from "react";
import "bulma";

const Input = ({ label, type, placeholder, onChange, ...props }) => {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input
          className="input"
          type={type ? type : "text"}
          placeholder={placeholder}
          onChange={onChange}
          {...props}
        />
      </div>
    </div>
  );
};

export { Input };
