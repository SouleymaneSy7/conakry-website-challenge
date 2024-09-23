import FooterElementsList from "./FooterElementsList";
import { footerLinks } from "@/constants/homepage-constants";

const FooterElements = () => {
  return (
    <div className="footer__link-elements">
      <FooterElementsList linkList={footerLinks} />
    </div>
  );
};

export default FooterElements;
