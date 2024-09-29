import Container from "./Container";
import HomeMainCommuneSection from "./HomeMainCommuneSection";
import HomeMainDiscoverSection from "./HomeMainDiscoverSection";
import HomeMainEvenementSection from "./HomeMainEvenementSection";
import HomeMainExploreSection from "./HomeMainExploreSection";

const HomeMain = () => {
  return (
    <Container as="main" role="main" className="home-main">
      <HomeMainExploreSection />
      <HomeMainDiscoverSection />
      <HomeMainCommuneSection />
      <HomeMainEvenementSection  />
    </Container>
  );
};

export default HomeMain;
