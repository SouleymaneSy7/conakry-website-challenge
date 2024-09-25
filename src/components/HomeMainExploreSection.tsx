import { exploreCards, exploreSection } from "@/constants/homepage-constants";
import Container from "./Container";
import Button from "./Buttons";
// import Button from "./Buttons";

const HomeMainExploreSection = () => {
  return (
    <Container as={"section"} className="explore-section | container">
      <div className="explore__flex">
        <div className="explore__textbox">
          <h2>{exploreSection.explorerTitle}</h2>
          <p>{exploreSection.explorerDescription}</p>
        </div>

        {/* <div className="explore__arrows">
          <Button type="button">arrow</Button>
        </div> */}
      </div>

      <Container as={"div"} className="explore-card-container">
        {exploreCards.map((card) => {
          return (
            <Container as={"article"} key={card.id} className="explore-card">
              {/* <div className="explore-card__img">
                <img src={card.cardImg} alt="" />
              </div> */}

              <h3 className="explore-card__title">{card.cardTitle}</h3>
              <p className="explore-card__description">
                {card.cardDescription}
              </p>
              <Button type="button" className="explore-card--btn">
                {card.cardBtn}
              </Button>
            </Container>
          );
        })}
      </Container>
    </Container>
  );
};

export default HomeMainExploreSection;
