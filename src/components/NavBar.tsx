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

          <Container
            as={"div"}
            className="navigaton-mobile__hamburger"
            onClick={handleOpen}
          >
            Hamburger
          </Container>
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

      <NavBarMobile isOpen={isOpen} handleOpen={handleOpen} />
    </React.Fragment>
  );
};

export default NavBar;
