import React from "react";

import Title from "./Title";
import { FooterLinksTypes } from "@/constants/homepage-constants";

type FooterElementsListPropsTypes = {
  linkList: FooterLinksTypes;
};

const FooterElementsList = ({ linkList }: FooterElementsListPropsTypes) => {
  return (
    <React.Fragment>
      {linkList.map((linkListItem) => {
        return (
          <div key={linkListItem.id} className="footer__link-elements">
            <Title level="h4" className="footer__link-elements__title">
              {linkListItem.linkTitle}
            </Title>

            <ul role="list">
              {linkListItem.linkList.map((subItem, index) => {
                return (
                  <li key={index} className="footer__link-elements__link">
                    <a href="#">{subItem}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default FooterElementsList;
