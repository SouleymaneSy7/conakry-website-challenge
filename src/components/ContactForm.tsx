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

  const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const handleNameError = () => {
    if (!firstName && !lastName) {
      setNameErrorMsg("Oops ! Il semble que tu aies oublié ton prénom ! 😊");
    } else {
      setNameErrorMsg("");
    }
  };

  const handleEmailError = () => {
    if (!email) {
      setEmailErrorMsg("Ton adresse email semble manquer à l'appel ! 🧐");
    } else if (!email.match(emailRegEx)) {
      setEmailErrorMsg(
        "Hmm... Ce n'est pas une adresse email valide. Essaie encore ! 😎"
      );
    } else {
      setEmailErrorMsg("");
    }
  };

  const handleMessageError = () => {
    if (!message) {
      setMessageErrorMsg(
        "Un petit message ? On aimerait bien lire ce que tu as à dire ! 😉"
      );
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
        <p>"Merci pour ton message ! Nous te répondrons bientôt ! 🎉"!</p>
      ) : (
        <Forms className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form--name">
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

            <small className="contact__form--errors">{NameErrorMsg}</small>
          </div>

          <div className="contact__form--email">
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

            <small className="contact__form--errors">{emailErrorMsg}</small>
          </div>

          <div className="contact__form__text-area-container">
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

            <small className="contact__form--errors">{messageErrorMsg}</small>
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
