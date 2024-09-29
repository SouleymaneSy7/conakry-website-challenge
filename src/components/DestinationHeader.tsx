import Container from "./Container";
import DestinationHeroSection from "./DestinationHeroSection";
import { destinationHeroSectionContents } from "@/constants/destination-page-constants";

const DestinationHeader = () => {
  const { heroTitle, heroDescription, heroBtn, heroImg } = destinationHeroSectionContents;
 
  return (
    <Container as="header" role="banner" id="main-content">
      <DestinationHeroSection
        heroTitle={heroTitle}
        heroDescription={heroDescription}
        heroBtn={heroBtn}
        heroImg={heroImg}
      />
    </Container>
  );
};

export default DestinationHeader;
