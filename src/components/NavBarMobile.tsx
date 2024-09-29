import React, { ComponentPropsWithRef, RefObject } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import FocusLock from "react-focus-lock";

import Button from "./Buttons";
import VisuallyHidden from "./VisuallyHidden";

import useDisableBodyScroll from "@/hooks/useOnDisableBodyScroll";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import { CrossIcon } from "@/icons/Icons.component";
import { navBarBtn, navBarList } from "@/constants/homepage-constants";

const mobileNavDOM = document.querySelector("#mobile-navbar-root");

type NavbarMobilePropsTypes = {
  isOpen: boolean;
  handleIsOpen: () => void;
};

const NavBarMobile = ({ isOpen, handleIsOpen }: NavbarMobilePropsTypes) => {
  const navigationMenuRef = React.useRef<HTMLDivElement>(null);

  useDisableBodyScroll(isOpen);
  useOnClickOutside(navigationMenuRef, () => {
    handleIsOpen();
  });
  return (
    <React.Fragment>
      {isOpen
        ? createPortal(
            <FocusLock returnFocus={true}>
              <div
                className={
                  isOpen
                    ? "navigation-mobile-container active"
                    : "navigation-mobile-container"
                }
                ref={navigationMenuRef}
              >
                <div className="navigation-mobile__header">
                  <Button
                    type="button"
                    className="navigation-mobile--close-btn"
                    onClick={handleIsOpen}
                  >
                    <CrossIcon width={24} height={24} />
                    <VisuallyHidden>
                      Fermer le menu de navigation mobile
                    </VisuallyHidden>
                  </Button>
                </div>

                <div className="navigation-mobile__body">
                  <ul role="list">
                    {navBarList.map((listItem) => {
                      return (
                        <li key={listItem.id}>
                          <Link
                            to={listItem.navBarListElementPath}
                            tabIndex={0}
                          >
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
              </div>
            </FocusLock>,
            mobileNavDOM!
          )
        : ""}
    </React.Fragment>
  );
};

export default NavBarMobile;
