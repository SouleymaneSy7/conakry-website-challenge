import React from "react";
import Container from "./Container";
import { FAQ } from "@/constants/contact-page-constants";
import Button from "./Buttons";

const ContactFAQ = () => {
  const id = React.useId();

  const FAQQuestionId = `faq-question-${id}`;
  const FAQResponseId = `faq-response-${id}`;

  return (
    <Container as="section" className="contact__accordion">
      <h2>Foire aux Questions (FAQ)</h2>

      {FAQ.map((item) => {
        return (
          <Container as={"div"} key={item.id} className="accordion">
            <div className="accordion__header">
              <h4>
                <Button
                  type="button"
                  id={FAQQuestionId}
                  aria-controls={FAQResponseId}
                >
                  <span>{item.faqQuestion}</span>
                  {/* Icons */}
                </Button>
              </h4>
            </div>

            <div
              role="region"
              id={FAQResponseId}
              aria-labelledby={FAQQuestionId}
              className="accordion__body"
            >
              {item.faqResponse}
            </div>
          </Container>
        );
      })}
    </Container>
  );
};

export default ContactFAQ;
