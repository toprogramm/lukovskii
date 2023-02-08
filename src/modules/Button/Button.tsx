import { FC } from "react";
import "./Button.scss";
export enum ColorVariant {
  usual = "usual",
  black = "black",
}
export enum ShadowVariant {
  usual = "usual",
  none = "none",
}
interface ButtonProps {
  colorVariant: ColorVariant;
  shadowVariant: ShadowVariant;
  children: JSX.Element | JSX.Element[];
}

const Button: FC<ButtonProps> = ({ colorVariant, shadowVariant, children }) => {
  return (
    <button
      className={
        colorVariant === ColorVariant.usual ? "Button" : "Button Button__black"
      }
      style={{
        boxShadow:
          shadowVariant === ShadowVariant.usual
            ? "3px 3px 3px #00000050"
            : "none",
      }}
    >
      {children}
    </button>
  );
};
export default Button;
