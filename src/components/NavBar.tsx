import React from "react";
import { Link } from "react-router-dom";

import { Logo } from "@/icons/Icons.component";
import { navBarBtn } from "@/constants/homepage-constants";

import Button from "./Buttons";
import Container from "./Container";
import NavBarMobile from "./NavBarMobile";
import NavBarElements from "./NavBarElements";
import VisuallyHidden from "./VisuallyHidden";

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <nav className="navigation" role="navigation">
        <Container as={"div"} className="navigation-mobile | container">
          <Link className="navigation__logo" to={"/"}>
            <Logo />
            <VisuallyHidden>Logo du site web de Conakry</VisuallyHidden>
          </Link>

          <Button
            type="button"
            className={
              isOpen
                ? "navigation-mobile--hamburger active"
                : "navigation-mobile--hamburger"
            }
            onClick={handleOpen}
            aria-expanded={isOpen}
            aria-controls="menu"
          >
            <span className="line-top"></span>
            <span className="line-center"></span>
            <span className="line-bottom"></span>
            <VisuallyHidden>Ouvrir le menu de navigation mobile</VisuallyHidden>
          </Button>
        </Container>

        <Container as={"div"} className="navigation-desktop | container">
          <Link className="navigation__logo" to={"/"}>
            <Logo />
            <VisuallyHidden>Logo du site web de Conakry</VisuallyHidden>
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
