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
      <h3 className="Experience__name greenText">
        <b id="Experience">Experience</b>
      </h3>
      <Jobs />
    </div>
  );
};

export default Experience;
