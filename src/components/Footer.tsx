import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import FooterElements from "./FooterElements";
import FooterNewsletter from "./FooterNewsletter";
import { footerCopyright } from "@/constants/homepage-constants";
import FooterAttribution from "./FooterAttribution";

const Footer = () => {
  return (
    <footer className="footer">
      <Container as={"section"} className="container">
        <div className="footer__top">
          <Link to={"/"} className="footer__logo">
            {/* Footer Logo */}
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
