import React from "react";

import Title from "./Title";
import Button from "./Buttons";
import Container from "./Container";

import { destinationContents } from "@/constants/destination-page-constants";

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
                  <Title level="h2">{content.title}</Title>
                  <p>{content.description}</p>
                </div>

                <div className="destination__img">
                  {/* <img src={content.img} alt={`${content.classNames} images`} /> */}
                </div>
              </div>

              <div className="destination__cards-container">
                {content.cards.map((card) => {
                  return (
                    <Container as={"article"} key={card.id} className="destination-card">
                      <div className="destination-card__img">
                        {/* <img
                          src={card.img}
                          alt={`Image de ${card.cardTitle}`}
                        /> */}
                      </div>

                      <Title level="h3" className="destination-card__title">
                        {card.cardTitle}
                      </Title>
                      <p className="destination-card__description">
                        {card.cardDescription}
                      </p>

                      <div className="destination-card__flex">
                        <Button type="button" className="destination-card--btn">
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

      <div className="destination--btn | container">
        <Button type="button">Voir plus</Button>
      </div>
    </React.Fragment>
  );
};

export default DestinationSectionContents;
