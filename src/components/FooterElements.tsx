import React from 'react';
import FooterElementsList from "./FooterElementsList";
import { footerLinks } from "@/constants/homepage-constants";

const FooterElements = () => {
  return (
    <React.Fragment>
      <FooterElementsList linkList={footerLinks} />
    </React.Fragment>
  );
};

export default FooterElements;
