import { text } from "stream/consumers";
import "./Header.scss";
// rotate 3d https://sitehere.ru/3d-preobrazovaniya-i-animacii
const BURGER_SVG = (
  <svg
    width="19"
    height="15"
    viewBox="0 0 19 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line y1="1" x2="19" y2="1" stroke="#035C2C" stroke-width="2" />
    <line y1="6.33337" x2="19" y2="6.33337" stroke="#035C2C" stroke-width="2" />
    <line y1="12" x2="19" y2="12" stroke="#035C2C" stroke-width="2" />
  </svg>
);
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
async function copyCode(link: string) {
  try {
    await navigator.clipboard.writeText(link);
    alert("Link Copied 🙂");
  } catch (e) {
    console.log(e);
  }
}
function Header() {
  return (
    <div id="header" className="Header">
      <div style={{opacity:0}}>{BURGER_SVG}</div>
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
    </div>
  );
}
export default Header;
