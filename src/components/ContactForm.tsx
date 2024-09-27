import React, { FormEvent } from "react";

import Forms from "./Forms";
import Inputs from "./Inputs";
import Button from "./Buttons";
import Container from "./Container";

const ContactForm = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const [NameErrorMsg, setNameErrorMsg] = React.useState("");
  const [emailErrorMsg, setEmailErrorMsg] = React.useState("");
  const [messageErrorMsg, setMessageErrorMsg] = React.useState("");

  const [success, setSuccess] = React.useState(false);

  const id = React.useId();
  const firstNameId = `${id}-first-name`;
  const lastNameId = `${id}-last-name`;
  const emailId = `${id}-email`;
  const messageId = `${id}-message`;

  const emailRegEx = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const handleNameError = () => {
    if (!firstName && !lastName) {
      setNameErrorMsg("Entrer votre Nom ou Prénom, s'il vous plait!");
    } else {
      setNameErrorMsg("");
    }
  };

  const handleEmailError = () => {
    if (!email) {
      setEmailErrorMsg("Entrer votre Email, s'il vous plait!");
    } else if (!email.match(emailRegEx)) {
      setEmailErrorMsg("S'il vous plait, Entrer un Email Valide!");
    } else {
      setEmailErrorMsg("");
    }
  };

  const handleMessageError = () => {
    if (!message) {
      setMessageErrorMsg("S'il vous plait, entrer un message!");
    } else if (message.length < 4) {
      setMessageErrorMsg("Parler nous plus!!!");
    } else {
      setMessageErrorMsg("");
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    handleNameError();
    handleEmailError();
    handleMessageError();

    if ((firstName || lastName) && email && message) {
      setSuccess(true);
    }
  };

  return (
    <React.Fragment>
      {success ? (
        <p>
          Merci de nous envoyer un Message. On vous repondra dans de plus bref
          delais!
        </p>
      ) : (
        <Forms className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form__flex">
            <div>
              <Inputs
                id={firstNameId}
                label="Nom"
                type="text"
                placeholder="John"
                value={firstName}
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
              />

              <p>{NameErrorMsg}</p>
            </div>

            <div>
              <Inputs
                id={lastNameId}
                label="Prénom"
                type="text"
                placeholder="Doe"
                value={lastName}
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
              />
            </div>
          </div>

          <div>
            <Inputs
              id={emailId}
              label="Adresse e-mail "
              type="email"
              placeholder="johndoe@email.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />

            <p>{emailErrorMsg}</p>
          </div>

          <div>
            <Container as={"div"} className="contact__form__text-area">
              <label htmlFor={messageId}>
                Message <span>*</span>
              </label>
              <textarea
                id={messageId}
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
              ></textarea>
            </Container>

            <p>{messageErrorMsg}</p>
          </div>

          <Button type="submit" className="contact__form--btn">
            Envoyer
          </Button>
        </Forms>
      )}
    </React.Fragment>
  );
};

export default ContactForm;
