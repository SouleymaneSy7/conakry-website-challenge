import { contactIntro } from "@/constants/contact-page-constants";
import React from "react";

const ContactIntro = () => {
  return (
    <React.Fragment>
      <h1>{contactIntro.title}</h1>
      <p>{contactIntro.description}</p>
    </React.Fragment>
  );
};

export default ContactIntro;
