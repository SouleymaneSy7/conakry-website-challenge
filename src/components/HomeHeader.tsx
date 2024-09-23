import { heroSection } from "@/constants/homepage-constants";
import Container from "./Container";
import HeroSection from "./HeroSection";

const HomeHeader = () => {
  const { heroTitle, heroBtnText } = heroSection;

  return (
    <Container
      as="header"
      className="hero-section-container | container-medium"
    >
      <HeroSection heroTitle={heroTitle} heroBtnText={heroBtnText} />
    </Container>
  );
};

export default HomeHeader;
