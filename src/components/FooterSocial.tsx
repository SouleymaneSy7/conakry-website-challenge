import { footerSocialIcons } from "@/constants/homepage-constants.ts";

const FooterSocial = () => {
  return (
    <ul role="list" className="footer__newsletter__socials">
      {footerSocialIcons.map((Icon, index) => (
        <li key={index}>
          <a href="#">
            <Icon fill="var(--light-clr)" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterSocial;
