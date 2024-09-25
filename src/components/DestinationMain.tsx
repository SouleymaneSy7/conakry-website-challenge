import Container from "./Container";
import DestinationSectionContents from "./DestinationSectionContents";

const DestinationMain = () => {
  return (
    <Container as={"main"} className="destination-main">
      <DestinationSectionContents />
    </Container>
  );
};

export default DestinationMain;
