import React from 'react';

import {
  StyledAboutAccentText,
  StyledAboutList,
  StyledWrapperGames,
} from './About.styled';

const AboutText = () => {
  return (
    <>
      <StyledAboutList>
        <li>
          <div>
            <p>
              <span>Оксана Опенько: дипломований сексолог,</span> який допоможе
              вам і вашому партнеру відкрити нові горизонти інтимних відносин.
            </p>
            <p>
              З індивідуальним підходом до кожного клієнта, я допоможу вам і
              вашому партнеру відкрити світ інтимної близькості на новому рівні.
              Працюючи індивідуально та з парами, я спеціалізуюсь на допомозі
              тим, хто перебуває в довготривалих стосунках і шукає свіжі підходи
              до відновлення близькості.
            </p>
          </div>
        </li>
        <li>
          <h3>Професійний ріст і спеціалізація:</h3>
          <p>
            На стадії завершення освіти з психотерапії, фокусуючись на методі
            Consonance Therapy.
          </p>
          <p>
            Досвід роботи з травмами сексуального насилля, негативним
            сексуальним досвідом та викликами статевого виховання.
          </p>
        </li>
        <li>
          <h3>Авторські проекти:</h3>
          <StyledWrapperGames>
            <li>
              <p>
                Гра «30 питань про секс для пари» - ваш ключ до відвертих розмов
                та яскравих відкриттів.
              </p>
            </li>
            <li>
              <p>
                Освітня програма для батьків, які прагнуть виховувати своїх
                дітей інформованими та впевненими в собі.
              </p>
            </li>
            <li>
              <p>
                Практичні тренінги для жінок, які готові пізнати своє тіло та
                емоції на глибшому рівні.
              </p>
            </li>
          </StyledWrapperGames>
        </li>
      </StyledAboutList>
      <StyledAboutAccentText>
        Запрошую вас в подорож до світу відносин, де ви навчитеся розуміти,
        цінувати та насолоджуватися кожним моментом разом.
      </StyledAboutAccentText>
    </>
  );
};

export default AboutText;