import { linkedIn, github, email, website, telegram, phone  } from "./ContactsData";

import ContentBox from "../ContentBox/ContentBox";
import { OrientationVariant } from "../ContentBox/ContentBox";
import { FC } from "react";

import "./Contacts.scss";

const Contacts = () => {
  return (
    <div className="Contacts">
      
      <ContentBox orientationVariant={OrientationVariant.other}>
        <div className="Contacts__pad">
          <h3 className="Contacts__name greenText smallPadding">
            <b>My Contacts</b>
          </h3>
          <div className="Contacts__picturePlusInfo"><img src="./whatsapp.svg" /><h4><b>{phone}</b></h4></div>
          <div className="Contacts__picturePlusInfo" ><img  src="./email.svg" /><h4><b>{email}</b></h4></div>
          <div className="iconBoard">
            <a target="_blank" href={website.link} className="contactIcon">
              {website.svg}
            </a>
            <a target="_blank" href={linkedIn.link} className="contactIcon">
              {linkedIn.svg}
            </a>

            <a target="_blank" href={telegram.link} className="contactIcon">
              {telegram.svg}
            </a>
            <a target="_blank" href={github.link} className="contactIcon">
              {github.svg}
            </a>
          </div>
        </div>
      </ContentBox>
      
    </div>
  );
};

export default Contacts;
