import "./Navigation.scss";
import Button from "../Button/Button";
import { ColorVariant } from "../Button/Button";
import { ShadowVariant } from "../Button/Button";
import { ScrollCenter, ScrollTop } from "../Scroll/Scroll";

const Navigation = () => {
  return (
    <div className="Navigation">
      <div className="Navigation__box">
        <Button
          onClick={() => {
            ScrollCenter("AboutMe");
          }}
          colorVariant={ColorVariant.usual}
          shadowVariant={ShadowVariant.none}
        >
          <h5>About me</h5>
        </Button>
        <Button
          onClick={() => {
            ScrollTop("Experience");
          }}
          colorVariant={ColorVariant.usual}
          shadowVariant={ShadowVariant.none}
        >
          <h5>Experience</h5>
        </Button>
        <Button
          onClick={() => {
            ScrollCenter("Contacts");
          }}
          colorVariant={ColorVariant.usual}
          shadowVariant={ShadowVariant.none}
        >
          <h5>Services</h5>
        </Button>
      </div>
    </div>
  );
};
export default Navigation;
