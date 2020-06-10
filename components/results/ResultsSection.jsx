import React from "react";
import classname from "classnames";

export const ResultsSection = ({
  children,
  title,
  body,
  sectionType
}) => {
  const classes = classname("results-section", {
    "results-section--primary": sectionType === "primary",
    "results-section--secondary": sectionType === "secondary",
    "results-section--tertiary": sectionType === "tertiary"
  });

  return (
    <section className={classes}>
      {children}
    </section>
  );
}
