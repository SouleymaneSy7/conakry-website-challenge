import React from "React";

import { communeSection, communeSlider } from "../constants/homepage-constants";

import Button from "./Buttons";
import Container from "./Container";
import LeafletMapContainer from "./LeafletMapContainer";

const HomeMainCommuneSection = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const prevHandler = () => {
    setCurrentIndex((index) => {
      return index === 0 ? communeSlider.length - 1 : index - 1;
    });
  };

  const nextHandler = () => {
    setCurrentIndex((index) => {
      return index === communeSlider.length - 1 ? 0 : index + 1;
    });
  };

  return (
    <Container as={"section"} className="commune-section">
      <div className="container">
        <div className="commune__textbox">
          <h2>{communeSection.communeTitle}</h2>
          <p>{communeSection.communeDescription}</p>
        </div>

        <div className="commune__flex">
          <Container as={"div"} className="commune__card-container">
            <Container as={"article"}>
              <h3>{communeSlider[currentIndex].sliderTitle}</h3>
              <p>{communeSlider[currentIndex].sliderDescription}</p>
            </Container>

            <div className="commune__card-btn-container">
              <Button type="button" className="commune--btn" onClick={prevHandler}>
                {"<"}
              </Button>
              <Button type="button" className="commune--btn" onClick={nextHandler}>
                {">"}
              </Button>
            </div>
          </Container>

          <div className="commune__map">
            <LeafletMapContainer />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomeMainCommuneSection;
