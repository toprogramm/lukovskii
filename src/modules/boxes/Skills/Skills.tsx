import ContentBox from "../../ContentBox/ContentBox";
import { OrientationVariant } from "../../ContentBox/ContentBox";

import "./Skills.scss";
const skills = {
  ru:"Навыки",
  en:"Skills"
}
const Skills = () => {
  return (
    <div className="Skills">
      <ContentBox orientationVariant={OrientationVariant.other}>
        
      </ContentBox>
      </div> 
  );
};

export default Skills;