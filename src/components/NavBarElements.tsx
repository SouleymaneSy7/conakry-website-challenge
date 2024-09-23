import React from "react";
import NavBarElementsList from "./NavBarElementsList";
import { navBarList } from "@/constants/homepage-constants";

const NavBarElements = () => {
  return (
    <React.Fragment>
      <ul className="navigation__elements">
        <NavBarElementsList list={navBarList} />
      </ul>
    </React.Fragment>
  );
};

export default NavBarElements;
