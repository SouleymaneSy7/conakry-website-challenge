import { type HeroSectionTypes } from "@/constants/homepage-constants";
import Container from "./Container";
import Button from "./Buttons";

const HeroSection = ({ heroTitle, heroBtnText }: HeroSectionTypes) => {
  return (
    <Container as={"section"} className="hero-section">
      <div className="hero-section__textbox">
        <h1 className="heading-1">{heroTitle}</h1>
        <Button type="button" className="hero-section--btn">
          {heroBtnText}
        </Button>
      </div>

      <div className="hero-section__img | box-shadow-3">
        {/* <img src={heroImage} alt="Beautifull view of Mountains" /> */}
      </div>
    </Container>
  );
};

export default HeroSection;
