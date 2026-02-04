import "./AboutMe.scss";
import { Trans, useTranslation } from "react-i18next";
import ContentBox from "../../ContentBox/ContentBox";
import { OrientationVariant } from "../../ContentBox/ContentBox";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <section id="AboutMe" className="AboutMe">
      <ContentBox orientationVariant={OrientationVariant.other}>
        <div className="AboutMe__name">
          <h4 className="greenText">
            <b>{t("aboutMe.title")}</b>
          </h4>
        </div>
        <div className="AboutMe__box">
          <div className="AboutMe__item">
            <Trans i18nKey="aboutMe.paragraph1" />
          </div>
          <div className="AboutMe__item">
            <Trans i18nKey="aboutMe.paragraph2" />
          </div>
        </div>
      </ContentBox>
    </section>
  );
};
export default AboutMe;
