import Title from "./Title";
import Button from "./Buttons";
import Container from "./Container";

import {
  evenementSection,
  evenementCards,
} from "@/constants/homepage-constants";

const HomeMainEvenementSection = () => {
  return (
    <Container as={"section"} className="evenement-section | container">
      <div className="evenement__textbox">
        <Title level="h2">{evenementSection.evenementTitle}</Title>
        <p>{evenementSection.evenementDescription}</p>
      </div>

      <Container as={"div"} className="evenement__card-container">
        {evenementCards.map((card) => {
          return (
            <Container as={"article"} key={card.id} className="evenement-card">
              <div className="evenement-card__img">
                {/* <img src="" alt="" /> */}
              </div>

              <div className="evenement-card__textbox">
                <Title level="h3" className="evenement-card__title">
                  {card.evenementCardTitle}
                </Title>
                <p className="evenement-card__date">
                  <strong>Date:</strong> {card.evenementCardDate}
                </p>

                <p className="evenement-card__description">
                  {card.evenementCardDescription}
                </p>
                <Button type="button" className="evenement-card--btn">
                  {card.evenementCardBtn}
                </Button>
              </div>
            </Container>
          );
        })}
      </Container>

      <div className="evenement--btn">
        <Button type="button">
          Voir plus
        </Button>
      </div>
    </Container>
  );
};

export default HomeMainEvenementSection;
