import { Link } from "react-router-dom";

import Container from "@/components/Container";
import ErrorIllustration from "@/assets/svgs/404-errors.svg";

const ErrorsPage = () => {
  return (
    <Container
      as={"main"}
      role="main"
      id="main-content"
      className="errors-page"
    >
      <Container as={"section"} className="container">
        <div>
          <div className="errors__illustration">
            <img
              src={ErrorIllustration}
              alt="Illustration d'un chat qui joue avec une boule de laine."
            />
          </div>

          <Link to={"/"} className="errors--link">
            Retourner sur la page d'accueil
          </Link>
        </div>
      </Container>
    </Container>
  );
};

export default ErrorsPage;
