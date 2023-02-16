import "./AboutMe.scss";
import ContentBox from "../../ContentBox/ContentBox";
import { OrientationVariant } from "../../ContentBox/ContentBox";
const aboutMeData = {
  ru: (
    <div className="AboutMe__box">
      <div className="AboutMe__item">
        3 года опыта во <b>Front-End разработке.</b> <br></br>Знание
        <b>
          HTML, CSS, JavaScript, Type Script, React, Redux, Vue, NodeJS.
          <br></br>
        </b>
        Глубокое понимание веб-стандартов и пользовательского опыта. Опыт
        предоставления высококачественных, отзывчивых веб-сайтов и
        веб-приложений. Навыки в Python и Flutter умеренно средние.
      </div>
      <div className="AboutMe__item">
        Более 7 лет опыта в области технологического управления, навыки
        разработки программного обеспечения, управления командой и
        стратегического планирования. Глубокое понимание современных технологий
        и тенденций в разработке программного обеспечения. Опыт предоставления
        высококачественных масштабируемых программных решений.
      </div>
    </div>
  ),
  en: (
    <div className="AboutMe__box">
      <div className="AboutMe__item">
        3 years of experience in <b>Front-End Development</b>. <br></br>Skilled
        in <b>HTML, CSS, JavaScript, Type Script, React, Redux, Vue, NodeJS.</b>
        <br></br> Strong understanding of web standards and user experience.
        Proven track record of delivering high-quality, responsive websites and
        web applications. Skills in Python and Flutter are moderately medium.
        умеренно средние.
      </div>
      <div className="AboutMe__item">
        7+ years of experience in <b>Technological Management.</b>
        <br></br>Skilled in software development, team management, and strategic
        planning. Strong understanding of current technologies and trends in
        software development. Proven track record of delivering high-quality,
        scalable software solutions.
      </div>
    </div>
  ),
};
const AboutMe = () => {
  return (
    <div id="AboutMe" className="AboutMe">
      <ContentBox orientationVariant={OrientationVariant.other}>
        <div className="AboutMe__name">
          <h4 className="greenText">
            <b>About Me</b>
          </h4>
        </div>
        <>{aboutMeData.en}</>
      </ContentBox>
    </div>
  );
};
export default AboutMe;
