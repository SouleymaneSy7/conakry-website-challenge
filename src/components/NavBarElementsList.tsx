import React from "react";
import { Link } from "react-router-dom";
import { type NavBarListTypes } from "@/constants/homepage-constants";

type NavBarElementsListProps = {
  list: NavBarListTypes;
};

const NavBarElementsList = ({ list }: NavBarElementsListProps) => {
  return (
    <React.Fragment>
      {list.map((listItem) => {
        return (
          <li key={listItem.id}>
            <Link to={listItem.navBarListElementPath}>
              {listItem.navBarListElementTitle}
            </Link>
          </li>
        );
      })}
    </React.Fragment>
  );
};

export default NavBarElementsList;
