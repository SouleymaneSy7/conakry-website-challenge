import { Link } from "react-router-dom";

import { navBarBtn } from "@/constants/homepage-constants";
import { Logo } from "@/icons/Icons.component";
import Button from "./Buttons";
import NavBarElements from "./NavBarElements";
import Container from "./Container";

const NavBar = () => {
  return (
    <nav className="navigation-desktop">
      <Container as={"div"} className="container">
        <Link className="navigation__logo" to={"/"}>
          <Logo />
        </Link>
        <NavBarElements />
        <Button className="navigation--btn" type="button">
          {navBarBtn}
        </Button>
      </Container>
    </nav>
  );
};

export default NavBar;
