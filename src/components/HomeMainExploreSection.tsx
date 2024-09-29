import Title from "./Title";
import Button from "./Buttons";
import Container from "./Container";
import VisuallyHidden from "./VisuallyHidden";

import { exploreCards, exploreSection } from "@/constants/homepage-constants";
import { ChevronLeftIcon, ChevronRightIcon } from "@/icons/Icons.component";

const HomeMainExploreSection = () => {
  return (
    <Container as={"section"} className="explore-section">
      <Container className="container">
        <div className="explore__flex">
          <div className="explore__textbox">
            <Title level="h2">{exploreSection.explorerTitle}</Title>
            <p>{exploreSection.explorerDescription}</p>
          </div>

          <div className="explore--btn-container">
            <Button type="button" className="explore--btn">
              <ChevronLeftIcon width={24} height={24} />
              <VisuallyHidden>Swipper vers la gauche</VisuallyHidden>
            </Button>

            <Button type="button" className="explore--btn">
              <ChevronRightIcon width={24} height={24} />
              <VisuallyHidden>Swipper vers la droite</VisuallyHidden>
            </Button>
          </div>
        </div>

        <div
          className="explore-card-wrapper"
          role="region"
          aria-label="Carousel des Endroits de Conakry"
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
                    <img
                      src={card.cardImage}
                      alt={`Images de ${card.cardTitle}`}
                    />
                  </div>

                  <Title level="h3" className="explore-card__title">
                    {card.cardTitle}
                  </Title>

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
        </div>
      </Container>
    </Container>
  );
};

export default HomeMainExploreSection;
