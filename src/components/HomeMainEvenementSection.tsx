import {
  evenementSection,
  evenementCards,
} from "@/constants/homepage-constants";
import Container from "./Container";
import Button from "./Buttons";

const HomeMainEvenementSection = () => {
  return (
    <Container as={"section"} className="evenement-section | container">
      <div className="evenement__textbox">
        <h2>{evenementSection.evenementTitle}</h2>
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
                <h3 className="evenement-card__title">
                  {card.evenementCardTitle}
                </h3>
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

      <Button type="button" className="evenement--btn">
        Voir plus
      </Button>
    </Container>
  );
};

export default HomeMainEvenementSection;
