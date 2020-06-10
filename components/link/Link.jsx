import React from "react";
import "./Link.scss";

export const Link = ({
  href,
  isExternal,
  children
}) => {
  return (
    <a
      className="link"
      href={href}
      target={isExternal && '_blank'}
      rel={isExternal && 'noopener noreferrer'}
    >
      {children}
    </a>
  );
}
