import Button from "./Buttons";
import Container from "./Container";

import { exploreCards, exploreSection } from "@/constants/homepage-constants";

const HomeMainExploreSection = () => {
  return (
    <Container as={"section"} className="explore-section">
      <div className="container">
        <div className="explore__flex">
          <div className="explore__textbox">
            <h2>{exploreSection.explorerTitle}</h2>
            <p>{exploreSection.explorerDescription}</p>
          </div>

          <div className="explore--btn-container">
            <Button type="button" className="explore--btn">
              Left
            </Button>

            <Button type="button" className="explore--btn">
              right
            </Button>
          </div>
        </div>

        <Container
          as={"div"}
          className="explore-card-wrapper"
          role="region"
          aria-label="Carousel de Conakry"
        >
          <div className="explore-card-container">
            {exploreCards.map((card) => {
              return (
                <Container
                  as={"article"}
                  key={card.id}
                  className="explore-card"
                >
                  <div className="explore-card__img">
                    {/* <img
                      src={card.cardImg}
                      alt={`Images de ${card.cardTitle}`}
                    /> */}
                  </div>

                  <h3 className="explore-card__title">{card.cardTitle}</h3>
                  <p className="explore-card__description">
                    {card.cardDescription}
                  </p>

                  <div className="explore-card-flex">
                    <Button type="button" className="explore-card--btn">
                      {card.cardBtn}
                    </Button>
                  </div>
                </Container>
              );
            })}
          </div>
        </Container>
      </div>
    </Container>
  );
};

export default HomeMainExploreSection;
