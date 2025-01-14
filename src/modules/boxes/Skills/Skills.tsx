import "./Skills.scss";
import ContentBox from "../../ContentBox/ContentBox";
import { OrientationVariant } from "../../ContentBox/ContentBox";
import { userLang } from "../../../App";
import Button from "../../Button/Button";
import { ColorVariant } from "../../Button/Button";
import { ShadowVariant } from "../../Button/Button";

const skills = {
  name: { ru: "Навыки:", en: "Skills:" },
  skills: {
    ru: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "React",
      "Redux",
      "NodeJs",
      "VUE",
      "Python",
      "Flutter",
      "Dart",
      "Аналитические навыки",
      "Управление персоналом",
      "Долгосрочное планирование",
    ],
    en: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "React",
      "Redux",
      "NodeJs",
      "VUE",
      "Python",
      "Flutter",
      "Dart",
      "Analytical skills",
      "Long Term Planning",
      "Personnel Management",
    ],
  },
};
const Skills = () => {
  return (
    <div className="Skills -ru">
      <ContentBox orientationVariant={OrientationVariant.other}>
        <h3 className=" Skills__name greenText">
          <b>{skills.name.en}</b>
        </h3>

        <div className="Skills__buttons">
          <>
            {skills.skills.en.map((item) => {
              return (
                <div className="ButtonLimiter">
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
