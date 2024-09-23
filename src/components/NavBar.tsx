import { Link } from "react-router-dom";
import NavBarElements from "./NavBarElements";
import Button from "./Buttons";
import { navBarBtn } from "@/constants/homepage-constants";

const NavBar = () => {
  return (
    <nav className="navigation">
      <Link className="navigation__logo" to={"/"}>
        {/* Logo */}
      </Link>
      <NavBarElements />
      <Button className="navigation--btn" type="button">
        {navBarBtn}
      </Button>
    </nav>
  );
};

export default NavBar;
