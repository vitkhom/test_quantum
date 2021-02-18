'use strict';
import headerMarkup from './header.hbs';
import './header.scss';

const refs = {
  header: document.querySelector('#js-header'),
};

const markup = headerMarkup();

refs.header.insertAdjacentHTML('beforeend', markup);

const navbar = document.querySelector('.navbar');
const ham = document.querySelector('.ham');

ham.addEventListener('click', toggleHamburger);

function toggleHamburger() {
  navbar.classList.toggle('showNav');
  ham.classList.toggle('showClose');
}
