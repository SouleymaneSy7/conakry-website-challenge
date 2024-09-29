import Title from "./Title";
import Container from "./Container";

import { discoverSection } from "@/constants/homepage-constants";

const HomeMainDiscoverSection = () => {
  return (
    <Container as={"section"} className="discover-section | container">
      <div className="discover__textbox">
        <Title level="h2"> {discoverSection.discoverTitle} </Title>
        <p> {discoverSection.discoverDescription}</p>
      </div>

      <div className="discover__video">{/* Video */}</div>
    </Container>
  );
};

export default HomeMainDiscoverSection;
