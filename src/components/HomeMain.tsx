import Container from "./Container";
import HomeMainDiscoverSection from "./HomeMainDiscoverSection";
import HomeMainExploreSection from "./HomeMainExploreSection";

const HomeMain = () => {
  return (
    <Container as="main" className="discover">
      <HomeMainExploreSection />
      <HomeMainDiscoverSection />
    </Container>
  );
};

export default HomeMain;
