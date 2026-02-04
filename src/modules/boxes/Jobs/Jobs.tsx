import "./Jobs.scss";
import { useTranslation } from "react-i18next";
import ContentBox from "../../ContentBox/ContentBox";
import { OrientationVariant } from "../../ContentBox/ContentBox";

interface Job {
  position: string[];
  company: string;
  period: string;
  achievements: string[];
}

const Jobs = () => {
  const { t } = useTranslation();
  const jobs = t("jobs", { returnObjects: true }) as Job[];

  return (
    <>
      {jobs.map((item, index) => {
        return (
          <div className="Job" key={index}>
            <ContentBox orientationVariant={OrientationVariant.other}>
              <div className="Job__vacancy">
                <h4 className="Job__position greenText">
                  <b>
                    {item.position.map((elem, i) => {
                      return (
                        <b key={i}>
                          {elem}
                          <br></br>
                        </b>
                      );
                    })}
                  </b>
                </h4>
                <h5 className="greyText">{t("experience.companyLabel")} {item.company}</h5>
                <h5 className="greyText">{item.period}</h5>
                <ul className="Job__achivements">
                  {item.achievements.map((elem, i) => {
                    return <li key={i}>{elem}</li>;
                  })}
                </ul>
              </div>
            </ContentBox>
          </div>
        );
      })}
    </>
  );
};

export default Jobs;
