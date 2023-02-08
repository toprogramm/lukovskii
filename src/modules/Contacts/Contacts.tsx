export const linkedIn = "https://www.linkedin.com/in/ivan-lukovskii-2a5141244/"
export const gitHub = "https://github.com/toprogramm"
export const email = "onelukovskii@gmail.com"
export const website = "https://lukovskii.com"
export const telegram = "@toprogramm"
export const phone = "+996 ( 705 ) 52 49 02"
import ContentBox from "../ContentBox/ContentBox"
import { OrientationVariant } from "../ContentBox/ContentBox"
import { FC } from "react";

import "./Contacts.scss";


const Contacts = () => {
  return (
    <div className="Contacts">
      <ContentBox orientationVariant={OrientationVariant.other}>
          <h4 className="greenColor"><b>My Contacts</b></h4>
          <h5>{phone}</h5>
          <h5>{email}</h5>
      </ContentBox>
    </div>
  );
};
export default Contacts;
