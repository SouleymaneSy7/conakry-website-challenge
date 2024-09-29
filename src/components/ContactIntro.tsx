import Title from "./Title";
import Container from "./Container";

import { contactIntro } from "@/constants/contact-page-constants";

const ContactIntro = () => {
  return (
    <Container as={"div"} className="contact__intro">
      <Title level="h1">{contactIntro.title}</Title>
      <p>{contactIntro.description}</p>
    </Container>
  );
};

export default ContactIntro;
