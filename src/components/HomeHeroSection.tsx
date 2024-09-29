import Title from "./Title";
import Button from "./Buttons";
import Container from "./Container";

import { type HeroSectionTypes } from "@/constants/homepage-constants";

const HomeHeroSection = ({ heroTitle, heroBtnText }: HeroSectionTypes) => {
  return (
    <Container as={"section"} className="hero-section">
      <div className="hero-section__textbox">
        <Title level="h1" className="heading-1">{heroTitle}</Title>
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

export default HomeHeroSection;
