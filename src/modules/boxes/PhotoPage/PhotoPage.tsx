import "./PhotoPage.scss";
import Button from "../../Button/Button";
import { ColorVariant } from "../../Button/Button";
import { ShadowVariant } from "../../Button/Button";
import ContentBox from "../../ContentBox/ContentBox";
import Avatar from "../../Avatar/Avatar";
import { OrientationVariant } from "../../ContentBox/ContentBox";
import { contactData } from "../../Contacts/ContactsData";

const PhotoPage = () => {
  return (
    <div className="PhotoPage">
      <ContentBox orientationVariant={OrientationVariant.usual}>
        <Avatar />
        <div className="photoPage__textField">
          <h5>
            <b className="whiteText">Hello</b>
          </h5>
          <h5>
            <b className="whiteText">I'm Ivan Lukovskii</b>
          </h5>
          <h4 className="whiteText">Front End Developer</h4>
        </div>
        <div className="buttonField">
          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            href={contactData.linkedIn.link}
          >
            <Button
              colorVariant={ColorVariant.black}
              shadowVariant={ShadowVariant.usual}
              onClick={() => {}}
            >
              <h5> Hire me </h5>
            </Button>
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="Front End Developer Ivan Lukovskii (en).pdf"
            download
          >
            <Button
              colorVariant={ColorVariant.black}
              shadowVariant={ShadowVariant.usual}
              onClick={() => {}}
            >
              <h5>Download CV</h5>
            </Button>
          </a>
        </div>
      </ContentBox>
    </div>
  );
};
export default PhotoPage;
