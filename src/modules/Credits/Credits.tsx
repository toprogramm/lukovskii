import "./Credits.scss";
const credits = {
  transparentBackground: (
    <div>
      Free SVG Background by{" "}
      <a className="whiteText" target="_blank" href="https://bgjar.com">
        BGJar
      </a>
    </div>
  ),
  icon: (
    <div>
      <a className="whiteText" href="https://www.freepik.com/free-vector/vector-green-leaf-icons-white-eco-concept_10601443.htm#query=leaf&position=1&from_view=search&track=sph">
        Image by macrovector
      </a>{" "}
      on Freepik
    </div>
  ),
  photoBackground: (
    <div>
      <a className="whiteText" href="https://www.freepik.com/free-vector/abstract-bokeh-blurred-lights-wallpaper_2582498.htm#page=5&query=green%20wallpaper&position=5&from_view=search&track=sph">
        Image by rawpixel.com
      </a>{" "}
      on Freepik
    </div>
  ),
};

const Credits = () => {
  return (
    <div className="Credits">
      <h1 className="whiteText">Credits</h1>
      <div className="whiteText">{credits.icon}</div>
      <div className="whiteText">{credits.photoBackground}</div>
      <div className="whiteText" >{credits.transparentBackground}</div>
    </div>
  );
};
export default Credits;
