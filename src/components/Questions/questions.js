'use strict';
import questionsTemplate from './questions.hbs';
import questionTemplate from './question.hbs';
import questions from './questions.json';

import './questions.scss';

const refs = {
  main: document.querySelector('#js-main'),
};

const markup = questionsTemplate();

refs.main.insertAdjacentHTML('beforeend', markup);

buildQuestions(questions);

function buildQuestions(questions) {
  const questionMarkup = questions
    .map(question => questionTemplate(question))
    .join('');

  const list = document.querySelector('.questions__list');
  list.insertAdjacentHTML('beforeend', questionMarkup);
}

makeVisible();

function makeVisible() {
  const textList = document.querySelectorAll('.list-item__descr');
  const buttonList = document.querySelectorAll('.item__close-button');

  document.querySelectorAll('.item__close-button').forEach(function (i) {
    i.addEventListener('click', function (e) {
      const buttonArr = Array.prototype.slice.call(buttonList);
      const clickedBtnIndex = [...buttonArr].indexOf(e.target);

      textList[clickedBtnIndex].classList.toggle('invisible');
      buttonList[clickedBtnIndex].classList.toggle('closeMore');
    });
  });
}
