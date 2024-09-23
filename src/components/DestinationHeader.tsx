import { destinationHeroSection } from "@/constants/destination-page-constants";
import Container from "./Container";
import DestinationHeroSection from "./DestinationHeroSection";

const DestinationHeader = () => {
  const { heroTitle, heroDescription, heroBtn } = destinationHeroSection;

  return (
    <Container
      as="header"
      className="hero-section-container | container-medium"
    >
      <DestinationHeroSection
        heroTitle={heroTitle}
        heroDescription={heroDescription}
        heroBtn={heroBtn}
      />
    </Container>
  );
};

export default DestinationHeader;
