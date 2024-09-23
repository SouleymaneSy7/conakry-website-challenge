import { discoverSection } from "@/constants/homepage-constants";
import Container from "./Container";

const HomeMainDiscoverSection = () => {
  return (
    <Container>
      <h2> {discoverSection.discoverTitle} </h2>
      <p> {discoverSection.discoverDescription}</p>
      {/* Video */}
    </Container>
  );
};

export default HomeMainDiscoverSection;
