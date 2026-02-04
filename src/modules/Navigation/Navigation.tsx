import "./Navigation.scss";
import { useTranslation } from "react-i18next";
import Button from "../Button/Button";
import { ColorVariant } from "../Button/Button";
import { ShadowVariant } from "../Button/Button";
import { ScrollCenter, ScrollTop } from "../Scroll/Scroll";

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <nav className="Navigation">
      <div className="Navigation__box">
        <Button
          onClick={() => {
            ScrollCenter("AboutMe");
          }}
          colorVariant={ColorVariant.usual}
          shadowVariant={ShadowVariant.none}
        >
          <h5>{t("nav.aboutMe")}</h5>
        </Button>
        <Button
          onClick={() => {
            ScrollTop("Experience");
          }}
          colorVariant={ColorVariant.usual}
          shadowVariant={ShadowVariant.none}
        >
          <h5>{t("nav.experience")}</h5>
        </Button>
        <Button
          onClick={() => {
            ScrollCenter("Contacts");
          }}
          colorVariant={ColorVariant.usual}
          shadowVariant={ShadowVariant.none}
        >
          <h5>{t("nav.services")}</h5>
        </Button>
      </div>
    </nav>
  );
};
export default Navigation;
