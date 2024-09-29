import Container from "./Container";
import ContactFAQAccordion from "./ContactFAQAccordion";

import { FAQ } from "@/constants/contact-page-constants";
import Title from "./Title";

const ContactFAQ = () => {
  return (
    <Container as="section" className="contact__accordion">
      <Title level="h2">Foire aux Questions (FAQ)</Title>

      {FAQ.map((item) => {
        return (
          <ContactFAQAccordion
            question={item.faqQuestion}
            response={item.faqResponse}
            key={item.id}
          />
        );
      })}
    </Container>
  );
};

export default ContactFAQ;
