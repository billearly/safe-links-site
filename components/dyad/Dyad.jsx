import React from "react";
import "./Dyad.scss";

export const Dyad = ({ children }) => {
  return (
    <div className="dyad">
      <div className="dyad__item">
        {children[0]}
      </div>

      <div className="dyad__item">
        {children[1]}
      </div>
    </div>
  );
}
