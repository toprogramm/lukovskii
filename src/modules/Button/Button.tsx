import React, { MouseEvent } from "react";
import { FC } from "react";
import "./Button.scss";
import { forwardRef } from "react";
import { Container } from "react-dom";

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
  children: React.ReactNode;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ colorVariant, shadowVariant, children, onClick }) => {
  return (
    <button onClick={onClick}
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