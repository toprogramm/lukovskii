import React, { FC } from "react";
import "./Experience.scss";
import ContentBox from "../../ContentBox/ContentBox";
import { OrientationVariant } from "../../ContentBox/ContentBox";
import Jobs from "../Jobs/Jobs";

interface ExperienceProps {
  children: JSX.Element | JSX.Element[];
}

const Experience: FC<ExperienceProps> = () => {
  return (
    <div className="Experience">
      <h3 className="greenText smallMarginBottom">
        <b>Опыт Работы</b>
      </h3>
      <Jobs/>
    </div>
  );
};

export default Experience;
