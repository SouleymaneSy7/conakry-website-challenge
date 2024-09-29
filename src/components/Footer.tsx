import { Link } from "react-router-dom";

import { footerCopyright } from "@/constants/homepage-constants";

import Container from "./Container";
import FooterElements from "./FooterElements";
import FooterNewsletter from "./FooterNewsletter";
import FooterAttribution from "./FooterAttribution";
import { FooterLogo } from "@/icons/Icons.component";
import VisuallyHidden from "./VisuallyHidden";

const Footer = () => {
  return (
    <footer className="footer">
      <Container as={"section"} className="container">
        <div className="footer__top">
          <Link to={"/"} className="footer__logo">
            <FooterLogo />
            <VisuallyHidden>Logo du site web de Conakry</VisuallyHidden>
          </Link>
          <FooterElements />
          <FooterNewsletter />
        </div>

        <div className="footer__bottom">
          <FooterAttribution />
          <p className="footer__bottom__copyright">{footerCopyright}</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
