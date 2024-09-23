import { footerSocialIcons } from "@/constants/homepage-constants.ts";

const FooterSocial = () => {
  return (
    <ul role="list">
      {footerSocialIcons.map((Icon, index) => (
        <li key={index}>
          <a href="#">
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterSocial;
