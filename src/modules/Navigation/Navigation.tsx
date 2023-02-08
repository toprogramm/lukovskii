import "./Navigation.scss";
import Button from "../Button/Button";
import { ColorVariant } from "../Button/Button";
import { ShadowVariant } from "../Button/Button";

const Navigation = () => {
  return (
    <div className="Navigation">
      <Button
        colorVariant={ColorVariant.usual}
        shadowVariant={ShadowVariant.none}
      >
        <h5>About me</h5>
      </Button>
      <Button
        colorVariant={ColorVariant.usual}
        shadowVariant={ShadowVariant.none}
      >
        <h5>Expirience</h5>
      </Button>
      <Button
        colorVariant={ColorVariant.usual}
        shadowVariant={ShadowVariant.none}
      >
        <h5>Services</h5>
      </Button>
    </div>
  );
};
export default Navigation;
