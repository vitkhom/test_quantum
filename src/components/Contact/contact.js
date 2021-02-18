'use strict';
import contactsTemplate from './contact.hbs';

const refs = {
  main: document.querySelector('#js-main'),
};

const markup = contactsTemplate();

refs.main.insertAdjacentHTML('beforeend', markup);
