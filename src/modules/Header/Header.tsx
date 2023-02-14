import "./Header.scss";
// rotate 3d https://sitehere.ru/3d-preobrazovaniya-i-animacii
function Header() {
  return (
    <div className="Header">
      <img style={{opacity:0}} src="./burger.svg"></img>
      <div className="Header__name">LUKOVSKii</div>
      <a><img src="./share.svg"></img></a>
    </div>
  );
}
export default Header;
