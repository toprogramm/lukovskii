import "./Credits.scss";
import { useTranslation } from "react-i18next";

const Credits = () => {
  const { t } = useTranslation();

  return (
    <div className="Credits">
      <h2 className="whiteText">{t("credits.title")}</h2>
      <div className="whiteText">
        <div>
          <a className="whiteText" target="_blank" rel="noopener noreferrer" href="https://www.freepik.com/free-vector/vector-green-leaf-icons-white-eco-concept_10601443.htm#query=leaf&position=1&from_view=search&track=sph">
            {t("credits.imageBy")} {t("credits.macrovector")}
          </a>{" "}
          {t("credits.onFreepik")}
        </div>
      </div>
      <div className="whiteText">
        <div>
          <a className="whiteText" target="_blank" rel="noopener noreferrer" href="https://www.freepik.com/free-vector/abstract-bokeh-blurred-lights-wallpaper_2582498.htm#page=5&query=green%20wallpaper&position=5&from_view=search&track=sph">
            {t("credits.imageBy")} {t("credits.rawpixel")}
          </a>{" "}
          {t("credits.onFreepik")}
        </div>
      </div>
      <div className="whiteText">
        <div>
          {t("credits.background")}{" "}
          <a className="whiteText" target="_blank" rel="noopener noreferrer" href="https://bgjar.com">
            {t("credits.bgjar")}
          </a>
        </div>
      </div>
      <div className="whiteText">
        <div>
          {t("credits.iconsFrom")}{" "}
          <a className="whiteText" target="_blank" rel="noopener noreferrer" href="https://www.svgrepo.com">
            {t("credits.svgRepo")}
          </a>
        </div>
      </div>
    </div>
  );
};
export default Credits;
