import { contactData } from "./ContactsData";

import ContentBox from "../ContentBox/ContentBox";
import { OrientationVariant } from "../ContentBox/ContentBox";
import { FC } from "react";

import "./Contacts.scss";
const WHATSAPP_SWG = (
  <svg
    fill="#24292f"
    width="40px"
    height="40px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z" />
    <path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z" />
  </svg>
);
const EMAIL_SVG = (
  <svg
    fill="#24292f"
    height="35px"
    width="35px"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 64 64"
    enable-background="new 0 0 64 64"
    xmlSpace="preserve"
  >
    <path
      id="Mail"
      d="M58.0034485,8H5.9965506c-3.3136795,0-5.9999995,2.6862001-5.9999995,6v36c0,3.3137016,2.6863203,6,5.9999995,6
        h52.006897c3.3137016,0,6-2.6862984,6-6V14C64.0034485,10.6862001,61.3171501,8,58.0034485,8z M62.0034485,49.1108017
        L43.084549,30.1919994l18.9188995-12.0555992V49.1108017z M5.9965506,10h52.006897c2.2056007,0,4,1.7943001,4,4v1.7664003
        L34.4677505,33.3134003c-1.4902,0.9492989-3.3935013,0.9199982-4.8495998-0.0703011L1.9965508,14.4694996V14
        C1.9965508,11.7943001,3.7910507,10,5.9965506,10z M1.9965508,16.8852005L21.182251,29.9251003L1.9965508,49.1108017V16.8852005z
        M58.0034485,54H5.9965506c-1.6473999,0-3.0638998-1.0021019-3.6760998-2.4278984l20.5199013-20.5200024l5.6547985,3.843401
        c1.0859013,0.7383003,2.3418007,1.1083984,3.5995998,1.1083984c1.1953011,0,2.3925018-0.3339996,3.4463005-1.0048981
        l5.8423996-3.7230015l20.2961006,20.2961025C61.0673485,52.9978981,59.6508713,54,58.0034485,54z"
    />
  </svg>
);
const Contacts = () => {
  return (
    <div id="Contacts" className="Contacts">
      <ContentBox orientationVariant={OrientationVariant.other}>
        <div className="Contacts__pad">
          <h3 className="Contacts__name greenText smallPadding">
            <b>My Contacts</b>
          </h3>
          <div className="Contacts__picturePlusInfo">
            <div>{WHATSAPP_SWG}</div>
            <a href="tel:+996550524902" className="Contacts__link blackText">
              <h4>
                <b>{contactData.phone}</b>
              </h4>
            </a>
          </div>
          <div className="Contacts__picturePlusInfo">
            <div>{EMAIL_SVG}</div>
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
