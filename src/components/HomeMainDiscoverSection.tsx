import { discoverSection } from "@/constants/homepage-constants";
import Container from "./Container";

const HomeMainDiscoverSection = () => {
  return (
    <Container as={"section"} className="discover-section | container">
      <div className="discover__textbox">
        <h2> {discoverSection.discoverTitle} </h2>
        <p> {discoverSection.discoverDescription}</p>
      </div>

      <div className="discover__video">{/* Video */}</div>
    </Container>
  );
};

export default HomeMainDiscoverSection;
