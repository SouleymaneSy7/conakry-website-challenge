import Container from "./Container";
import { contactIntro } from "@/constants/contact-page-constants";

const ContactIntro = () => {
  return (
    <Container as={"div"} className="contact__intro">
      <h1>{contactIntro.title}</h1>
      <p>{contactIntro.description}</p>
    </Container>
  );
};

export default ContactIntro;
