import React from "react";
import "./TransparentButton.scss"

export const TransparentButton = ({ children, ...other }) =>
  <button className="transparent-button" {...other} >
    {children}
  </button>