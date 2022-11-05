import './css/styles.css';
import fetchCountries from './js/fetchCountries';

const debounce = require('lodash.debounce');
const refs = {
  input: document.querySelector('input#search-box'),
};
const DEBOUNCE_DELAY = 300;

fetchCountries = new fetchCountries();

document.addEventListener(
  'input',
  debounce(() => {
    console.log(refs.input.value);
  }, DEBOUNCE_DELAY)
);
