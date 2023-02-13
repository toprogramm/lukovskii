import { contactData  } from "./ContactsData";

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
          <div className="Contacts__picturePlusInfo"><img src="./whatsapp.svg" /><h4><b>{contactData.phone}</b></h4></div>
          <div className="Contacts__picturePlusInfo" ><img  src="./email.svg" /><h4><b>{contactData.email}</b></h4></div>
          <div className="iconBoard">
            <a target="_blank" href={contactData.website.link} className="contactIcon">
              {contactData.website.svg}
            </a>
            <a target="_blank" href={contactData.linkedIn.link} className="contactIcon">
              {contactData.linkedIn.svg}
            </a>

            <a target="_blank" href={contactData.telegram.link} className="contactIcon">
              {contactData.telegram.svg}
            </a>
            <a target="_blank" href={contactData.github.link} className="contactIcon">
              {contactData.github.svg}
            </a>
          </div>
        </div>
      </ContentBox>
      
    </div>
  );
};

export default Contacts;
