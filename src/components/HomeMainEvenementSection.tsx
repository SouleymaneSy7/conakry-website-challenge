import {
  evenementSection,
  evenementCards,
} from "@/constants/homepage-constants";
import Container from "./Container";
import Button from "./Buttons";

const HomeMainEvenementSection = () => {
  return (
    <Container as={"section"}>
      <div>
        <h2>{evenementSection.evenementTitle}</h2>
        <p>{evenementSection.evenementDescription}</p>
      </div>

      <Container as={"div"}>
        {evenementCards.map((card) => {
          return (
            <Container as={"article"} key={card.id}>
              {/* <div>
              <img src="" alt="" />
            </div> */}

              <h3>{card.evenementCardTitle}</h3>
              <p>
                <strong>Date:</strong>
                {card.evenementCardDate}
              </p>

              <p>{card.evenementCardDescription}</p>
              <Button type="button">{card.evenementCardBtn}</Button>
            </Container>
          );
        })}
      </Container>
    </Container>
  );
};

export default HomeMainEvenementSection;
