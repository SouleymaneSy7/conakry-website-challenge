import Container from "./Container";
import HomeMainCommuneSection from "./HomeMainCommuneSection";
import HomeMainDiscoverSection from "./HomeMainDiscoverSection";
import HomeMainExploreSection from "./HomeMainExploreSection";

const HomeMain = () => {
  return (
    <Container as="main" className="discover">
      <HomeMainExploreSection />
      <HomeMainDiscoverSection />
      <HomeMainCommuneSection />
    </Container>
  );
};

export default HomeMain;
