import React from "react";
import { NavLink } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";

import "./MainNavigation.css";

const MainNavigation = () => {
  return (
    <>
      {window.location.pathname !== "/auth" && (
        <MainHeader>
          <h1 className="main-nav__title">
            <NavLink to="/main">Your flashcards</NavLink>
          </h1>
          <nav>
            <NavLinks />
          </nav>
        </MainHeader>
      )}
    </>
  );
};

export default MainNavigation;
