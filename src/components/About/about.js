'use strict';
import '../../../node_modules/slick-carousel/slick/slick.css';

import aboutTemplate from './about.hbs';
import commentTemplate from './comment.hbs';
import comments from './about.json';

import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use([Navigation, Pagination]);

import './about.scss';

const refs = {
  main: document.querySelector('#js-main'),
};

baseMarkup();

function baseMarkup() {
  const aboutMarkup = aboutTemplate();
  refs.main.insertAdjacentHTML('beforeend', aboutMarkup);
}

buildComments(comments);

function buildComments(comments) {
  const commentMarkup = comments
    .map(comment => commentTemplate(comment))
    .join('');

  const list = document.querySelector('.about__list');
  list.insertAdjacentHTML('beforeend', commentMarkup);
}

const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
