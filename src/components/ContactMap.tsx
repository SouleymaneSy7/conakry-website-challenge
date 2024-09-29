import Container from "./Container";
import VisuallyHidden from "./VisuallyHidden";
// import LeafletMapContainer from "./LeafletMapContainer";

const ContactMap = () => {
  return (
    <Container
      as={"div"}
      className="contact__map"
      aria-label="Carte interactive de Conakry"
    >
      {/* <LeafletMapContainer /> */}
      <VisuallyHidden>Carte interactive de Conakry</VisuallyHidden>
    </Container>
  );
};

export default ContactMap;
