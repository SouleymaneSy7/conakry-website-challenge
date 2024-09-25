import Forms from "./Forms";
import Inputs from "./Inputs";
import Button from "./Buttons";
import { footerNewsletter } from "@/constants/homepage-constants";
import FooterSocial from "./FooterSocial";

const FooterNewsletter = () => {
  const {
    newsletterTitle,
    newsletterDescription,
    newsletterInputPlaceholder,
    newsletterBtn,
  } = footerNewsletter;

  return (
    <div className="footer__newsletter">
      <h3>{newsletterTitle}</h3>
      <p>{newsletterDescription}</p>

      <Forms className="footer__newsletter__form">
        <Inputs
          type="email"
          placeholder={newsletterInputPlaceholder}
          className="footer__newsletter__form__input"
        />
        <Button type="submit" className="footer__newsletter__form--btn">
          {newsletterBtn}
        </Button>
      </Forms>

      <FooterSocial />
    </div>
  );
};

export default FooterNewsletter;
