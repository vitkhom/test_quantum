'use strict';
import introMarkup from './intro.hbs';
import './intro.scss';

const refs = {
  main: document.querySelector('#js-main'),
};

const markup = introMarkup();

refs.main.insertAdjacentHTML('beforeend', markup);
