import Container from "./Container";
import DestinationHeroSection from "./DestinationHeroSection";
import { destinationHeroSection } from "@/constants/destination-page-constants";

const DestinationHeader = () => {
  const { heroTitle, heroDescription, heroBtn } = destinationHeroSection;

  return (
    <Container as="header">
      <DestinationHeroSection
        heroTitle={heroTitle}
        heroDescription={heroDescription}
        heroBtn={heroBtn}
      />
    </Container>
  );
};

export default DestinationHeader;
