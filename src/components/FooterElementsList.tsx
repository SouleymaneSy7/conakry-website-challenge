import { FooterLinksTypes } from "@/constants/homepage-constants";
import React from "react";

type FooterElementsListPropsTypes = {
  linkList: FooterLinksTypes;
};

const FooterElementsList = ({ linkList }: FooterElementsListPropsTypes) => {
  return (
    <React.Fragment>
      {linkList.map((linkListItem) => {
        return (
          <div key={linkListItem.id}>
            <h3 className="footer__link-elements__title">
              {linkListItem.linkTitle}
            </h3>

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
