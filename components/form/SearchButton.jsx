import React from "react";
import { ArrowRightCircle } from "react-feather";
import classnames from "classnames";

export const SearchButton = ({ isDisabled }) => {
  const classes = classnames("submit-button", {
    "submit-button--disabled": isDisabled
  });

  return (
    <button
      type="submit"
      className={classes}
      disabled={isDisabled}
    >
      <ArrowRightCircle />
    </button>
  )
}
