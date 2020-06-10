import React from 'react';
import "./Header.scss";

export const Header = ({ title, children }) => {
  return (
    <div className="header">
      <h1 className="header__title">
        {title}
      </h1>
      {children}
    </div>
  );
}
