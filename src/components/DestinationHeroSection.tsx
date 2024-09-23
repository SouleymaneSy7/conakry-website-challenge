import { DestinationHeroSectionTypes } from "@/constants/destination-page-constants";
import Container from "./Container";
import Button from "./Buttons";

const DestinationHeroSection = ({
  heroTitle,
  heroDescription,
  heroBtn,
}: DestinationHeroSectionTypes) => {
  return (
    <Container as={"section"}>
      <div>
        <h1>{heroTitle}</h1>
        <p>{heroDescription}</p>
        <Button type="button">{heroBtn}</Button>
      </div>

      {/* <div>
        <img src="" alt="" />
      </div> */}
    </Container>
  );
};

export default DestinationHeroSection;
