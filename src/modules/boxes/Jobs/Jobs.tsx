import React , { FC } from "react";
import "./Jobs.scss";
import ContentBox from "../../ContentBox/ContentBox";
import { OrientationVariant } from "../../ContentBox/ContentBox";

interface JobsProps {
  children: JSX.Element | JSX.Element[];
}

const Jobs: FC<JobsProps> = () => {
  return (
  <ContentBox orientationVariant={OrientationVariant.other}>
    <div className="vacancy">
      <h4 className="greenText">
        <b>Front End Developer</b>
      </h4>
      <h5 className="greyText">«Hi Psy» LLC| январь 2021 — июль 2021</h5>
      <ul className="job">
        <li>
          Участие в разработке дизайна и принятии окончательного решения
        </li>
        <li>Создан корпоративный сайт для этой компании.</li>
        <li>Подбор оптимального технологического решения для разработки</li>
      </ul>
    </div>
  </ContentBox>

  )
}


const jobsCount = [
  {
    position: { ru: "Front End Developer", en: "Front End Developer" },
    period: {
      ru: "«Hi Psy» LLC| Январь 2021 — Июль 2021",
      en: "«Hi Psy» LLC| January 2021 — July 2021",
    },
    achivements: {
      ru: [
        "Участие в разработке дизайна и принятии окончательного решения",
        "Создан корпоративный сайт для этой компании.",
        "Подбор оптимального технологического решения для разработки",
      ],
      en: [
        "Participated in design development and final decision making.",
        "Created corporate website for this company.",
        "Сhose the optimal technology solution for development.",
      ],
    },
  },
  {
    position: { ru: "Front End Developer", en: "Front End Developer" },
    period: {
      ru: "«STRADA» | Январь 2022 - Декабрь 2022",
      en: "«STRADA» | January 2022 - December 2022",
    },
    achivements: {
      ru: [
        "Подобраны решения для проекта",
        "Разработаны требуемые приложения или их часть.",
        "Активно помогал в QA и тестировал платформу для обучения",
      ],
      en: [
        "Developed some applications or part of them",
        "Аctively helped in QA, and tested platform for studying",
        "Chose solutions for project",
      ],
    },
  },
  {
    position: { ru: "Разработчик Python", en: "Python Developer" },
    period: {
      ru: "«BIP39» | Август 2022 - Настоящее время",
      en: "«BIP39» | August 2022 - Present",
    },
    achivements: {
      ru: [
        "Создан генератор seed phrase BIP39 работающий offline с открытым исходным кодом",
        "Поддержка продукта (неполный рабочий день)",
      ],
      en: [
        "Created opensource Offline BIP39 Seed Phrase Generator",
        "Maintain this product (part time)",
      ],
    },
  },
  {
    position: {
      ru: "Flutter Разработчик, Системный и Социальный Дизайнер",
      en: "Flutter Developer, System and Social Designer",
    },
    period: {
      ru: "«Image Language» | Ноябрь 2022 - Настоящее время",
      en: "«Image Language» | November 2022 - Present",
    },
    achivements: {
      ru: [
        "Создание языковой платформы для изучения языка",
        "Выбор и разработка уникальной концепции обучения",
        "Выбор инструмента разработки проекта",
      ],
      en: [
        "Created Language Platform for Studying language",
        "Developed unique conception of studying",
        "Chose develop instrument for project ",
      ],
    },
  },
  {
    position: {
      ru: "Технический Директор (CTO)",
      en: "Chief Technology Officer (CTO)",
    },
    period: {
      ru: "«Павличенко» ООО| Февраль 2017 - Настоящее время",
      en: "«Pavlichenko» LLC| February 2017 - Present",
    },
    achivements: {
      ru: [
        "Проведение бизнес-анализ и выбор эффективных решений.",
        "Сообщал всю необходимую информацию главному операционному директору и тесно сотрудничал с ним для достижения и поддержания целей.",
        "Организованы рабочие места персонала",
        "Управление персоналом",
      ],
      en: [
        "Conducted business analysis and chose effective solutions.",
        "Reported all necessary information to the Chief Operating Officer and worked closely with them to achieve and maintain goals.",
        "Organized work-spaces of personnel",
      ],
    },
  },
  {
    position: {
      ru: "Технический Директор (CTO), IT-инженер",
      en: "Chief Technology Officer (CTO), IT Engineer",
    },
    period: {
      ru: "«Мидгалэль» ООО | Январь 2013 - Январь 2017",
      en: "«Midgalel» LLC | January 2013 - January 2017",
    },
    achivements: {
      ru: [
        "Организовал работу, финансовую отчетность и цифровое общение",
        "Проведение бизнес-анализа и принятие ключевых решений",
        "Решены проблемы с коммуникацией внутри коллектива",
      ],
      en: [
        "Organized work, financial statements and digital communication",
        "Conducted business analysis and made key decisions",
        "Solved communication problems within the team",
      ],
    },
  },
];

const JobExperimental =(props: any) => {
  const result = jobsCount.map(function(item) {
  return(
  <ContentBox orientationVariant={OrientationVariant.other}>
    <div className="vacancy">
      <h4 className="greenText">
        <b>{item.position.ru}</b>
      </h4>
      <h5 className="greyText">{item.period.ru}</h5>
      <ul className="job">
        <li>
          {item.achivements.ru}
        </li>
        
      </ul>
    </div>
  </ContentBox>)
   
});
return result
}
const JobsFinal = () => {
  return (<JobExperimental />)
}
export default JobsFinal