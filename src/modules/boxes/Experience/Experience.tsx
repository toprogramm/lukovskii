import "./Experience.scss";
import { useTranslation } from "react-i18next";
import Jobs from "../Jobs/Jobs";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section className="Experience">
      <h3 className="Experience__name greenText">
        <b id="Experience">{t("experience.title")}</b>
      </h3>
      <Jobs />
    </section>
  );
};

export default Experience;
