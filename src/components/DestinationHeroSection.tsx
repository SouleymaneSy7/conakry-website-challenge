import Title from "./Title";
import Button from "./Buttons";
import Container from "./Container";

import { DestinationHeroSectionTypes } from "@/constants/destination-page-constants";

const DestinationHeroSection = ({
  heroTitle,
  heroDescription,
  heroBtn,
}: DestinationHeroSectionTypes) => {
  return (
    <Container as={"section"} className="destination-header | container">
      <div className="destination-header__textbox">
        <Title level="h1">{heroTitle}</Title>
        <p>{heroDescription}</p>
        <Button type="button">{heroBtn}</Button>
      </div>

      <div className="destination-header__img">
        {/* <img src="" alt="" /> */}
      </div>
    </Container>
  );
};

export default DestinationHeroSection;
