import { contactData } from "./ContactsData";

import ContentBox from "../ContentBox/ContentBox";
import { OrientationVariant } from "../ContentBox/ContentBox";
import { FC } from "react";

import "./Contacts.scss";

const Contacts = () => {
  return (
    <div id="Contacts" className="Contacts">
      <ContentBox orientationVariant={OrientationVariant.other}>
        <div className="Contacts__pad">
          <h3 className="Contacts__name greenText smallPadding">
            <b>My Contacts</b>
          </h3>
          <div className="Contacts__picturePlusInfo">
            <img src="./whatsapp.svg" />
            <a href="tel:+996550524902" className="Contacts__link blackText">
              <h4>
                <b>{contactData.phone}</b>
              </h4>
            </a>
          </div>
          <div className="Contacts__picturePlusInfo">
            <img src="./email.svg" />
            <a
              href="mailto:onelukovskii@gmail.com"
              className="Contacts__link blackText"
            >
              <h4>
                <b>{contactData.email}</b>
              </h4>
            </a>
          </div>
          <div className="Contacts__iconBoard">
            <a
              target="_blank"
              href={contactData.facebook.link}
              className="Contacts__contactIcon"
            >
              {contactData.facebook.svg}
            </a>
            <a
              target="_blank"
              href={contactData.linkedIn.link}
              className="Contacts__contactIcon"
            >
              {contactData.linkedIn.svg}
            </a>

            <a
              target="_blank"
              href={contactData.telegram.link}
              className="Contacts__contactIcon"
            >
              {contactData.telegram.svg}
            </a>
            <a
              target="_blank"
              href={contactData.whatsapp.link}
              className="Contacts__contactIcon"
            >
              {contactData.whatsapp.svg}
            </a>
            <a
              target="_blank"
              href={contactData.github.link}
              className="Contacts__contactIcon"
            >
              {contactData.github.svg}
            </a>
          </div>
        </div>
      </ContentBox>
    </div>
  );
};

export default Contacts;
