import Container from "./Container";
import DestinationHeroSection from "./DestinationHeroSection";
import { destinationHeroSection } from "@/constants/destination-page-constants";

const DestinationHeader = () => {
  const { heroTitle, heroDescription, heroBtn } = destinationHeroSection;
 
  return (
    <Container as="header" role="banner" id="main-content">
      <DestinationHeroSection
        heroTitle={heroTitle}
        heroDescription={heroDescription}
        heroBtn={heroBtn}
      />
    </Container>
  );
};

export default DestinationHeader;
