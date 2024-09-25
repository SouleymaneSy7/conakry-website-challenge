import { heroSection } from "@/constants/homepage-constants";
import Container from "./Container";
import HeroSection from "./HeroSection";

const HomeHeader = () => {
  const { heroTitle, heroBtnText } = heroSection;

  return (
    <Container
      as="header"
      className="home-header | container"
    >
      <HeroSection heroTitle={heroTitle} heroBtnText={heroBtnText} />
    </Container>
  );
};

export default HomeHeader;
