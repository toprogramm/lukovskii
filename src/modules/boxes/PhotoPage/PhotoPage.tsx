import "./PhotoPage.scss";
import Button from "../../Button/Button";
import { ColorVariant } from "../../Button/Button";
import { ShadowVariant } from "../../Button/Button";
import ContentBox from "../../ContentBox/ContentBox";
import Avatar from "../../Avatar/Avatar";
import TextField from "../../TextField/TextField";
import { OrientationVariant } from "../../ContentBox/ContentBox";
const PhotoPage = () => {
  return (
    <div className="PhotoPage">
      <ContentBox orientationVariant={OrientationVariant.usual}>
        <Avatar />
        <div className="photoPage__textField">
          <TextField >
            <h5>
              <b className="whiteText">Hello</b>
            </h5>
          </TextField>
          <TextField >
            <h5>
              <b className="whiteText">I'm Ivan Lukovskii</b>
            </h5>
          </TextField>
          <TextField >
            <h4 className="whiteText">Front End Developer</h4>
          </TextField>
        </div>
        <div className="buttonField">
          <Button
            colorVariant={ColorVariant.black}
            shadowVariant={ShadowVariant.usual}
          >
            <h5> Hire me </h5>
          </Button>
          <Button
            colorVariant={ColorVariant.black}
            shadowVariant={ShadowVariant.usual}
          >
            <h5>Download CV</h5>
          </Button>
        </div>
      </ContentBox>
    </div>
  );
};
export default PhotoPage;
