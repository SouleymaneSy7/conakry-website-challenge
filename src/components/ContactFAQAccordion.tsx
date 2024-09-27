import React from "react";

import Button from "./Buttons";
import Container from "./Container";

type ContactFAQAccordionPropsType = {
  question: string;
  response: string;
};

const ContactFAQAccordion = ({
  question,
  response,
}: ContactFAQAccordionPropsType) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const id = React.useId();

  const FAQQuestionId = `faq-question-${id}`;
  const FAQResponseId = `faq-response-${id}`;

  const handleShow = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Container as={"div"} className="accordion">
      <div
        className={
          isExpanded ? "accordion__header active" : "accordion__header"
        }
      >
        <h4>
          <Button
            type="button"
            id={FAQQuestionId}
            aria-controls={FAQResponseId}
            aria-expanded={isExpanded}
            onClick={handleShow}
          >
            <span>{question}</span>
            {/* Icons */}
          </Button>
        </h4>
      </div>

      <div
        role="region"
        id={FAQResponseId}
        aria-labelledby={FAQQuestionId}
        hidden={!isExpanded}
        className="accordion__body"
      >
        {response}
      </div>
    </Container>
  );
};

export default ContactFAQAccordion;
