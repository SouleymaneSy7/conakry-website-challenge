import React from "React";

import Title from "./Title";
import Button from "./Buttons";
import Container from "./Container";
import VisuallyHidden from "./VisuallyHidden";
import LeafletMapContainer from "./LeafletMapContainer";

import { communeSection, communeSlider } from "../constants/homepage-constants";

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
      <Container className="container">
        <div className="commune__textbox">
          <Title level="h2">{communeSection.communeTitle}</Title>
          <p>{communeSection.communeDescription}</p>
        </div>

        <div className="commune__flex">
          <Container as={"div"} className="commune__card-container">
            <Container as={"article"}>
              <Title level="h3">
                {communeSlider[currentIndex].sliderTitle}
              </Title>
              <p>{communeSlider[currentIndex].sliderDescription}</p>
            </Container>

            <div className="commune__card-btn-container">
              <Button
                type="button"
                className="commune--btn"
                onClick={prevHandler}
                aria-label="Précédent"
              >
                {"<"}
                <VisuallyHidden>Précédent</VisuallyHidden>
              </Button>

              <Button
                type="button"
                className="commune--btn"
                onClick={nextHandler}
                aria-label="Suivant"
              >
                {">"}
                <VisuallyHidden>Suivant</VisuallyHidden>
              </Button>
            </div>
          </Container>

          <div
            className="commune__map"
            aria-label="Carte interactive de Conakry"
          >
            <LeafletMapContainer />
            <VisuallyHidden>Carte interactive de Conakry</VisuallyHidden>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default HomeMainCommuneSection;
