import "./Skills.scss";
import { useTranslation } from "react-i18next";
import ContentBox from "../../ContentBox/ContentBox";
import { OrientationVariant } from "../../ContentBox/ContentBox";
import Button from "../../Button/Button";
import { ColorVariant } from "../../Button/Button";
import { ShadowVariant } from "../../Button/Button";

const Skills = () => {
  const { t } = useTranslation();
  const items = t("skills.items", { returnObjects: true }) as string[];

  return (
    <div className="Skills -ru">
      <ContentBox orientationVariant={OrientationVariant.other}>
        <h3 className=" Skills__name greenText">
          <b>{t("skills.title")}</b>
        </h3>

        <div className="Skills__buttons">
          <>
            {items.map((item, index) => {
              return (
                <div className="ButtonLimiter" key={index}>
                  <Button
                    onClick={() => {}}
                    colorVariant={ColorVariant.usual}
                    shadowVariant={ShadowVariant.usual}
                  >
                    <h5>{item}</h5>
                  </Button>
                </div>
              );
            })}
          </>
        </div>
      </ContentBox>
    </div>
  );
};

export default Skills;
