import Title from "./Title";
import Container from "./Container";

import { discoverSection } from "@/constants/homepage-constants";
import ReactPlayer from "react-player";

const HomeMainDiscoverSection = () => {
  const videoUrl = "https://www.youtube.com/watch?v=0MA9hs4K47E";
  return (
    <Container as={"section"} className="discover-section | container">
      <div className="discover__textbox">
        <Title level="h2"> {discoverSection.discoverTitle} </Title>
        <p> {discoverSection.discoverDescription}</p>
      </div>

      <div className="discover__video">
        <ReactPlayer url={videoUrl} playing width={"100%"} height={"100%"} />
      </div>
    </Container>
  );
};

export default HomeMainDiscoverSection;
