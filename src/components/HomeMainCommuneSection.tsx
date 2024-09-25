import Container from "./Container";
import { communeSection, communeSlider } from "../constants/homepage-constants";

const HomeMainCommuneSection = () => {
  return (
    <Container as={"section"} className="commune-section">
      <div className="container">
        <div>
          <h2>{communeSection.communeTitle}</h2>
          <p>{communeSection.communeDescription}</p>
        </div>

        <div>
          <Container as={"div"}>
            {communeSlider.map((slider) => {
              return (
                <Container as={"article"} key={slider.id}>
                  <h3>{slider.sliderTitle}</h3>
                  <p>{slider.sliderDescription}</p>
                </Container>
              );
            })}
            {/* Buttons */}
          </Container>

          {/* <div className="commune-map"></div> */}
        </div>
      </div>
    </Container>
  );
};

export default HomeMainCommuneSection;
