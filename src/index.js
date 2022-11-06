import './css/styles.css';
import fetchCountries from './js/fetchCountries';

const debounce = require('lodash.debounce');
const refs = {
  input: document.querySelector('input#search-box'),
};
const DEBOUNCE_DELAY = 300;
let query = '';

document.addEventListener(
  'input',
  debounce(() => {
    query = refs.input.value.trim();
    fetchCountries(query);
  }, DEBOUNCE_DELAY)
);
