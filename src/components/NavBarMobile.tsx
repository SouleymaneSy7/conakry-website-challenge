import React from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";

import Button from "./Buttons";
import Container from "./Container";

import useDisableBodyScroll from "@/hooks/useOnDisableBodyScroll";
import { navBarBtn, navBarList } from "@/constants/homepage-constants";

const mobileNavDOM = document.querySelector("#mobile-navbar-root");

type NavbarMobilePropsTypes = {
  isOpen: boolean;
};

const NavBarMobile = ({ isOpen }: NavbarMobilePropsTypes) => {
  useDisableBodyScroll(isOpen);
  return (
    <React.Fragment>
      {isOpen
        ? createPortal(
            <Container
              as={"div"}
              className={
                isOpen
                  ? "navigation-mobile-container active"
                  : "navigation-mobile-container"
              }
            >
              <div className="navigation-mobile__body">
                <ul role="list">
                  {navBarList.map((listItem) => {
                    return (
                      <li key={listItem.id}>
                        <Link to={listItem.navBarListElementPath}>
                          {listItem.navBarListElementTitle}
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <Button type="button" className="navigation-mobile--btn">
                  {navBarBtn}
                </Button>
              </div>
            </Container>,
            mobileNavDOM!
          )
        : ""}
    </React.Fragment>
  );
};

export default NavBarMobile;
