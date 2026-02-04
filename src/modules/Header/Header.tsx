import "./Header.scss";
import { useTranslation } from "react-i18next";
import LanguageToggle from "../LanguageToggle/LanguageToggle";

const SHARE_SVG = (
  <svg
    height="24px"
    width="24px"
    version="1.1"
    id="_x32_"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
  >
    <g>
      <path
        className="Header__share"
        fill="#24292f"
        d="M512,255.995L277.045,65.394v103.574c-17.255,0-36.408,0-57.542,0c-208.59,0-249.35,153.44-201.394,266.128
		c9.586-103.098,142.053-100.701,237.358-100.701c7.247,0,14.446,0,21.578,0v112.211L512,255.995z"
      />
    </g>
  </svg>
);

function Header() {
  const { t } = useTranslation();

  async function copyCode(link: string) {
    try {
      await navigator.clipboard.writeText(link);
      alert(t("header.linkCopied"));
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <header id="header" className="Header">
      <LanguageToggle />
      <div className="Header__name">LUKOVSKii</div>
      <a
        id="copy"
        className="Header__share"
        onClick={() => {
          copyCode("https://www.lukovskii.com");
        }}
      >
        {SHARE_SVG}
      </a>
    </header>
  );
}
export default Header;
