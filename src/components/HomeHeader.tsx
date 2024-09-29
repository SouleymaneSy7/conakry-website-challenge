import Container from "./Container";
import HomeHeroSection from "./HomeHeroSection";
import { heroSection } from "@/constants/homepage-constants";

const HomeHeader = () => {
  const { heroTitle, heroBtnText } = heroSection;

  return (
    <Container
      as="header"
      id="main-content"
      className="home-header | container"
      role="banner"
    >
      <HomeHeroSection heroTitle={heroTitle} heroBtnText={heroBtnText} />
    </Container>
  );
};

export default HomeHeader;
