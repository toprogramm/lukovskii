import React, { FC } from "react";
import "./Jobs.scss";
import ContentBox from "../../ContentBox/ContentBox";
import { OrientationVariant } from "../../ContentBox/ContentBox";
import { userLang } from "../../../App";

const Jobs = () => {
  return (
    <>
      {jobHistory.map((item, index) => {
        return (
          <div className="Job">
            <ContentBox orientationVariant={OrientationVariant.other}>
              <div className="Job__vacancy" key={index}>
                <h4 className="Job__position greenText">
                  <b>
                    {item.position.en.map((elem) => {
                      return (
                        <b>
                          {elem}
                          <br></br>
                        </b>
                      );
                    })}
                  </b>
                </h4>
                <h5 className="greyText">Company: {item.company.en}</h5>
                <h5 className="greyText">{item.period.en}</h5>
                <ul className="Job__achivements">
                  {item.achivements.en.map((elem) => {
                    return <li>{elem}</li>;
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

const jobHistory = [
  {
    position: { ru: ["Front End Developer"], en: ["Front End Developer"] },
    company: {
      ru: "«Hi Psy» LLC",
      en: "«Hi Psy» LLC",
    },
    period: {
      ru: "Январь 2021 — Июль 2021",
      en: "January 2021 — July 2021",
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
    position: { ru: ["Front End Developer"], en: ["Front End Developer"] },
    company: {
      ru: "«STRADA»",
      en: "«STRADA»",
    },
    period: {
      ru: "Январь 2022 - Декабрь 2022",
      en: "January 2022 - December 2022",
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
    position: { ru: ["Разработчик Python"], en: ["Python Developer"] },
    company: {
      ru: "«BIP39»",
      en: "«BIP39»",
    },
    period: {
      ru: "Август 2022 - Настоящее время",
      en: "August 2022 - Present",
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
      ru: [
        "Front End Developer,",
        "Flutter Разработчик,",
        "Системный и Социальный Дизайнер",
      ],
      en: [
        "Front End Developer,",
        "Flutter Developer,",
        "System and Social Designer",
      ],
    },
    company: {
      ru: "«Meta Language»",
      en: "«Meta Language»",
    },
    period: {
      ru: "Ноябрь 2022 - Настоящее время",
      en: "November 2022 - Present",
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
      ru: ["Технический Директор (CTO)"],
      en: ["Chief Technology Officer (CTO)"],
    },
    company: {
      ru: "«Павличенко» ООО",
      en: "«Pavlichenko» LLC",
    },
    period: {
      ru: "Февраль 2017 - Настоящее время",
      en: "February 2017 - Present",
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
      ru: ["Технический Директор (CTO),", "IT-Инженер"],
      en: ["Chief Technology Officer (CTO), ", "IT-Engineer"],
    },
    company: {
      ru: "«Мидгалэль» ООО",
      en: "«Midgalel» LLC",
    },
    period: {
      ru: "Январь 2013 - Январь 2017",
      en: "LLC | January 2013 - January 2017",
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

export default Jobs;
