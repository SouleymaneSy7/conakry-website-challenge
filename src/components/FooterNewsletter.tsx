import Title from "./Title";
import Forms from "./Forms";
import Inputs from "./Inputs";
import Button from "./Buttons";
import FooterSocial from "./FooterSocial";

import { footerNewsletter } from "@/constants/homepage-constants";

const FooterNewsletter = () => {
  const {
    newsletterTitle,
    newsletterDescription,
    newsletterInputPlaceholder,
    newsletterBtn,
  } = footerNewsletter;

  return (
    <div className="footer__newsletter">
      <Title level="h4">{newsletterTitle}</Title>
      <p>{newsletterDescription}</p>

      <Forms className="footer__newsletter__form">
        <Inputs
          type="email"
          placeholder={newsletterInputPlaceholder}
          className="footer__newsletter__form__input"
        />
        <Button
          type="submit"
          aria-label="submit"
          className="footer__newsletter__form--btn"
        >
          {newsletterBtn}
        </Button>
      </Forms>

      <FooterSocial />
    </div>
  );
};

export default FooterNewsletter;
