import { destinationContents } from "@/constants/destination-page-constants";
import Container from "./Container";
import Button from "./Buttons";

const DestinationSectionContents = () => {
  return (
    <Container as={"section"}>
      {destinationContents.map((content) => {
        return (
          <Container as="div" key={content.id} className={content.classNames}>
            <div>
              <h2>{content.title}</h2>
              <p>{content.description}</p>
              {/* <div>
                <img src={content.img} alt="" />
              </div> */}
            </div>

            <div>
              {content.cards.map((card) => {
                return (
                  <Container as={"article"} key={card.id}>
                    {/* <div>
                        <img src={card.img} alt="" />
                      </div> */}

                    <h3>{card.cardTitle}</h3>
                    <p>{card.cardDescription}</p>
                    <Button type="button">{card.cardBtn}</Button>
                  </Container>
                );
              })}
            </div>
          </Container>
        );
      })}
    </Container>
  );
};

export default DestinationSectionContents;
