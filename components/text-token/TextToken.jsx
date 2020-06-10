import React from "react";
import classname from "classnames"
import "./TextToken.scss";

export const TextToken = ({ children, type }) => {
  const classes = classname("text-token", {
    "text-token--warning": type === "warning"
  });

  return (
    <p className={classes}>
      {children}
    </p>
  );
}
