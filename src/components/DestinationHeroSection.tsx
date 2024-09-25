import { DestinationHeroSectionTypes } from "@/constants/destination-page-constants";
import Container from "./Container";
import Button from "./Buttons";

const DestinationHeroSection = ({
  heroTitle,
  heroDescription,
  heroBtn,
}: DestinationHeroSectionTypes) => {
  return (
    <Container as={"section"} className="destination-header | container">
      <div className="destination-header__textbox">
        <h1>{heroTitle}</h1>
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
