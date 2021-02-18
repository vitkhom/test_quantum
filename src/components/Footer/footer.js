'use strict';
import footerTemplate from './footer.hbs';
import './footer.scss';

const refs = {
  footer: document.querySelector('#js-footer'),
};

const markup = footerTemplate();

refs.footer.insertAdjacentHTML('beforeend', markup);
