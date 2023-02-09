import { linkedIn, github, email, website, telegram, phone  } from "./ContactsData";

import ContentBox from "../ContentBox/ContentBox";
import { OrientationVariant } from "../ContentBox/ContentBox";
import { FC } from "react";

import "./Contacts.scss";

const Contacts = () => {
  return (
    <div className="Contacts">
      <div className="contactCenter">
      <ContentBox orientationVariant={OrientationVariant.other}>
        <div className="contactPad">
          <h4 className="greenText">
            <b>My Contacts</b>
          </h4>
          <h5>{phone}</h5>
          <h5>{email}</h5>
          <div className="iconBoard">
            <a href={website.link} className="contactIcon">
              {website.svg}
            </a>
            <a href={linkedIn.link} className="contactIcon">
              {linkedIn.svg}
            </a>

            <a href={telegram.link} className="contactIcon">
              {telegram.svg}
            </a>
            <a href={github.link} className="contactIcon">
              {github.svg}
            </a>
          </div>
        </div>
      </ContentBox>
      </div>
    </div>
  );
};

export default Contacts;
