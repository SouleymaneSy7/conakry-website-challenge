import Title from "./Title";
import Button from "./Buttons";
import Container from "./Container";

import { DestinationHeroSectionContentsTypes } from "@/constants/destination-page-constants";

const DestinationHeroSection = ({
  heroTitle,
  heroDescription,
  heroBtn,
  heroImg
}: DestinationHeroSectionContentsTypes) => {
  return (
    <Container as={"section"} className="destination-header | container">
      <div className="destination-header__textbox">
        <Title level="h1">{heroTitle}</Title>
        <p>{heroDescription}</p>
        <Button type="button" className="destination-header--btn">{heroBtn}</Button>
      </div>

      <div className="destination-header__img">
        <img src={heroImg} alt="Ville de conakry, vue d'en haut." />
      </div>
    </Container>
  );
};

export default DestinationHeroSection;
