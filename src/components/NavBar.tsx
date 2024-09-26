import React from "react";
import { Link } from "react-router-dom";

import { Logo } from "@/icons/Icons.component";
import { navBarBtn } from "@/constants/homepage-constants";

import Button from "./Buttons";
import Container from "./Container";
import NavBarMobile from "./NavBarMobile";
import NavBarElements from "./NavBarElements";

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <nav className="navigation">
        <Container as={"div"} className="navigation-mobile | container">
          <Link className="navigation__logo" to={"/"}>
            <Logo />
          </Link>

          <Button
            type="button"
            className={
              isOpen
                ? "navigation-mobile--hamburger active"
                : "navigation-mobile--hamburger"
            }
            onClick={handleOpen}
          >
            <span className="line-top"></span>
            <span className="line-center"></span>
            <span className="line-bottom"></span>
          </Button>
        </Container>

        <Container as={"div"} className="navigation-desktop | container">
          <Link className="navigation__logo" to={"/"}>
            <Logo />
          </Link>
          <NavBarElements />
          <Button className="navigation--btn" type="button">
            {navBarBtn}
          </Button>
        </Container>
      </nav>

      <NavBarMobile isOpen={isOpen} />
    </React.Fragment>
  );
};

export default NavBar;
