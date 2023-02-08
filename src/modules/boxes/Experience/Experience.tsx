import React, { FC } from "react";
import "./Experience.scss";
import ContentBox from "../../ContentBox/ContentBox";
import { OrientationVariant } from "../../ContentBox/ContentBox";

interface ExperienceProps {
  children: JSX.Element | JSX.Element[];
}

const Experience: FC<ExperienceProps> = () => {
  return (
    <div className="Experience">
      <h3 className="greenText smallMarginBottom">
        <b>Опыт Работы</b>
      </h3>
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
      <ContentBox orientationVariant={OrientationVariant.other}>
        <div className="vacancy">
          <h4 className="greenText">
            <b>Front End Developer</b>
          </h4>
          <h5 className="greyText">«STRADA» | Январь 2022 - Декабрь 2022</h5>
          <ul className="job">
            <li>Подобраны решения для проекта</li>
            <li>Разработаны требуемые приложения или их часть.</li>
            <li>Активно помогал в QA и тестировал платформу для обучения</li>
          </ul>
        </div>
      </ContentBox>
      <ContentBox orientationVariant={OrientationVariant.other}>
        <div className="vacancy">
          <h4 className="greenText">
            <b>Разработчик Python</b>
          </h4>
          <h5 className="greyText">«BIP39» | Август 2022 - Настоящее время</h5>
          <ul className="job">
            <li>
              Создан генератор seed phrase BIP39 работающий offline с открытым
              исходным кодом.
            </li>
            <li>Поддержка продукта (неполный рабочий день)</li>
          </ul>
        </div>
      </ContentBox>
      <ContentBox orientationVariant={OrientationVariant.other}>
        <div className="vacancy">
          <h4 className="greenText">
            <b>Flutter Developer, System and Social Designer</b>
          </h4>
          <h5 className="greyText">
            «Image Language» | Ноябрь 2022 - Настоящее время
          </h5>
          <ul className="job">
            <li>Создание языковой платформы для изучения языка</li>
            <li>Выбор и разработка уникальной концепции обучения</li>
            <li>Выбор инструмента разработки проекта</li>
          </ul>
        </div>
      </ContentBox>
      <ContentBox orientationVariant={OrientationVariant.other}>
        <div className="vacancy">
          <h4 className="greenText">
            <b>Chief Technology Officer (CTO)</b>
          </h4>
          <h5 className="greyText">«Павличенко» ООО| Февраль 2017 - Настоящее время</h5>
          <ul className="job">
            <li>Проведение бизнес-анализ и выбор эффективных решений.</li>
            <li>
              Сообщал всю необходимую информацию главному операционному
              директору и тесно сотрудничал с ним для достижения и поддержания
              целей.
            </li>
            <li>Организованы рабочие места персонала</li>
          </ul>
        </div>
      </ContentBox>
      <ContentBox orientationVariant={OrientationVariant.other}>
        <div className="vacancy">
          <h4 className="greenText">
            <b>
Chief Technology Officer (CTO), IT-инженер</b>
          </h4>
          <h5 className="greyText">«Мидгалэль» ООО | Январь 2013 - Январь 2017</h5>
          <ul className="job">
            <li>
            Организовал работу и доставку цифровых сообщений
            </li>
            <li>Проведение бизнес-анализа и принятие ключевых решений</li>
            <li>Решены проблемы со коммуникацией внутри коллектива</li>
          </ul>
        </div>
      </ContentBox>
    </div>
  );
};

export default Experience;
