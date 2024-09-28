import { destinationContents } from "@/constants/destination-page-constants";
import Container from "./Container";
import Button from "./Buttons";
import React from "react";

const DestinationSectionContents = () => {
  return (
    <React.Fragment>
      {destinationContents.map((content) => {
        return (
          <Container
            as={"section"}
            key={content.id}
            className={`destination__${content.classNames}`}
          >
            <div className="container">
              <div className="destination__flex">
                <div className="destination__text">
                  <h2>{content.title}</h2>
                  <p>{content.description}</p>
                </div>

                <div className="destination__img">
                  {/* <img src={content.img} alt={`${content.classNames} images`} /> */}
                </div>
              </div>

              <div className="destination__cards-container">
                {content.cards.map((card) => {
                  return (
                    <Container as={"article"} key={card.id} className="card">
                      <div className="card__img">
                        {/* <img
                          src={card.img}
                          alt={`Image de ${card.cardTitle}`}
                        /> */}
                      </div>

                      <h3 className="card__title">{card.cardTitle}</h3>
                      <p className="card__description">
                        {card.cardDescription}
                      </p>

                      <div className="card__flex">
                        <Button type="button" className="card--btn">
                          {card.cardBtn}
                        </Button>
                      </div>
                    </Container>
                  );
                })}
              </div>
            </div>
          </Container>
        );
      })}

      <div className="destination--btn">
        <Button type="button">Voir plus</Button>
      </div>
    </React.Fragment>
  );
};

export default DestinationSectionContents;
