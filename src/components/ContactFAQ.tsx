import Container from "./Container";
import ContactFAQAccordion from "./ContactFAQAccordion";

import { FAQ } from "@/constants/contact-page-constants";

const ContactFAQ = () => {
  return (
    <Container as="section" className="contact__accordion">
      <h2>Foire aux Questions (FAQ)</h2>

      {FAQ.map((item) => {
        return (
          <ContactFAQAccordion
            question={item.faqQuestion}
            response={item.faqResponse}
          />
        );
      })}
    </Container>
  );
};

export default ContactFAQ;
