import React from "react";
import Forms from "./Forms";
import Inputs from "./Inputs";
import Button from "./Buttons";
import Container from "./Container";

const ContactForm = () => {
  const id = React.useId();
  const firstNameId = `${id}-first-name`;
  const lastNameId = `${id}-last-name`;
  const emailId = `${id}-email`;
  const messageId = `${id}-message`;

  return (
    <Forms className="contact__form">
      <div className="contact__form__flex">
        <Inputs id={firstNameId} label="Nom" type="text" placeholder="John" />
        <Inputs id={lastNameId} label="Prénom" type="text" placeholder="Doe" />
      </div>

      <Inputs
        id={emailId}
        label="Adresse e-mail "
        type="text"
        placeholder="johndoe@email.com"
      />
      
      <Container as={"div"} className="contact__form__text-area">
        <label htmlFor={messageId}>
          Message <span>*</span>
        </label>
        <textarea id={messageId}></textarea>
      </Container>
      <Button type="submit" className="contact__form--btn">Envoyer</Button>
    </Forms>
  );
};

export default ContactForm;
