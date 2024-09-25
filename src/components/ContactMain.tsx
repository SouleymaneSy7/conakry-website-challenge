import ContactFAQ from "./ContactFAQ";
import ContactIntro from "./ContactIntro";
import Container from "./Container";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

const ContactMain = () => {
  return (
    <Container as={"main"} className="contact-main | container">
      <Container as={"section"}>
        <ContactIntro />

        <div className="contact__flex">
          <div>
            <ContactForm />
          </div>

          <div>
            <ContactMap />
          </div>
        </div>
      </Container>

      <ContactFAQ />
    </Container>
  );
};

export default ContactMain;
