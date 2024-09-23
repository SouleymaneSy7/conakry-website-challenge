import ContactFAQ from "./ContactFAQ";
import ContactIntro from "./ContactIntro";
import Container from "./Container";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

const ContactMain = () => {
  return (
    <Container as={"main"}>
      <Container as={"section"}>
        <div>
          <ContactIntro />
          <ContactForm />
        </div>

        <div>
          <ContactMap />
        </div>
      </Container>

      <ContactFAQ />
    </Container>
  );
};

export default ContactMain;
