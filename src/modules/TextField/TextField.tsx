import React, { FC } from "react";
import "./TextField.scss";
interface TextProps {
  children: JSX.Element | JSX.Element[];
}

const TextField: FC<TextProps> = ({  children }) => {
  return (
    <div
      className="TextField"
      
    >
      {children}
    </div>
  );
};

export default TextField;
