import "./Footer.scss";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="Footer whiteText">
      {t("footer.text")}
    </footer>
  );
};
export default Footer;
