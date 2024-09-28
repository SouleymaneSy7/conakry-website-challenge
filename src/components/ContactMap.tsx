import Container from "./Container";
import LeafletMapContainer from "./LeafletMapContainer";

const ContactMap = () => {
  return (
    <Container as={"div"} className="contact__map">
      <LeafletMapContainer />
    </Container>
  );
};

export default ContactMap;
