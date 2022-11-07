import './css/styles.css';
import cteateCountries from './js/crieateCounties';

const debounce = require('lodash.debounce');
const input = document.querySelector('input#search-box');
const DEBOUNCE_DELAY = 300;
let query = '';

document.addEventListener(
  'input',
  debounce(() => {
    query = input.value.trim();
    cteateCountries(query);
  }, DEBOUNCE_DELAY)
);
