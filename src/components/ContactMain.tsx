import Container from "./Container";
import ContactFAQ from "./ContactFAQ";
import ContactIntro from "./ContactIntro";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

const ContactMain = () => {
  return (
    <Container as={"main"} role="main" id="main-content" className="contact-main | container">
      <Container as={"section"}>
        <ContactIntro />

        <div className="contact__flex">
          <div>
            <ContactForm />
          </div>

          <ContactMap />
        </div>
      </Container>

      <ContactFAQ />
    </Container>
  );
};

export default ContactMain;
