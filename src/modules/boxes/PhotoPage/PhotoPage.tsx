import "./PhotoPage.scss";
import { useTranslation } from "react-i18next";
import Button from "../../Button/Button";
import { ColorVariant } from "../../Button/Button";
import { ShadowVariant } from "../../Button/Button";
import ContentBox from "../../ContentBox/ContentBox";
import Avatar from "../../Avatar/Avatar";
import { OrientationVariant } from "../../ContentBox/ContentBox";
import { contactData } from "../../Contacts/ContactsData";

const PhotoPage = () => {
  const { t } = useTranslation();

  return (
    <section className="PhotoPage">
      <ContentBox orientationVariant={OrientationVariant.usual}>
        <Avatar />
        <div className="PhotoPage__textField">
          <h5>
            <b className="whiteText">{t("photo.hello")}</b>
          </h5>
          <h5>
            <b className="whiteText">{t("photo.name")}</b>
          </h5>
          <h4 className="whiteText">{t("photo.role")}</h4>
        </div>
        <div className="PhotoPage__buttonField">
          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
            href={contactData.linkedIn.link}
          >
            <Button
              colorVariant={ColorVariant.black}
              shadowVariant={ShadowVariant.usual}
              onClick={() => {}}
            >
              <h5> {t("photo.hire")} </h5>
            </Button>
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="Front End Developer Ivan Lukovskii (multilang).pdf"
            download
          >
            <Button
              colorVariant={ColorVariant.black}
              shadowVariant={ShadowVariant.usual}
              onClick={() => {}}
            >
              <h5>{t("photo.downloadCv")}</h5>
            </Button>
          </a>
        </div>
      </ContentBox>
    </section>
  );
};
export default PhotoPage;
