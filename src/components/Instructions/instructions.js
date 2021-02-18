'use strict';
import instructionsMarkup from './instructions.hbs';
import './instructions.scss';

const refs = {
  main: document.querySelector('#js-main'),
};

const markup = instructionsMarkup();

refs.main.insertAdjacentHTML('beforeend', markup);
