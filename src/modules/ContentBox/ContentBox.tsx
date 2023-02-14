import "./ContentBox.scss";
import { FC} from "react";
const background = "../../../public/background.jpg";
const background90 = "../../../public/background90.jpg";
export enum OrientationVariant {
  usual = "usual",
  other = "other",
}

interface ContextBoxProps {
  orientationVariant: OrientationVariant;
  children: React.ReactNode;
}

const ContentBox: FC<ContextBoxProps> =({orientationVariant, children}) => {
  return (
    <div className="ContentBox">
      <div className={orientationVariant === OrientationVariant.usual ? "contentBoxImage" : "contentBoxImage__vertical"} />

      <div className="contextBoxChildren">{children}</div>
    </div>
  );
}
export default ContentBox;
