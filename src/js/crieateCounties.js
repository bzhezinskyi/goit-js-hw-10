import Notiflix from 'notiflix';
import fetchCountries from './fetchCountries';

const ulList = document.querySelector('.country-list');

export default function cteateCountries(query) {
  fetchCountries(query).then(arrey => {
    ulList.innerHTML = '';
    if (arrey.length === 1) {
      cteateTrueCountry(arrey);
    } else if (arrey.length > 1 && arrey.length <= 10) {
      createListCountries(arrey);
    } else if (arrey.length > 10) {
      muchCountries();
    } else {
      noCountry();
    }
  });
}

function cteateTrueCountry(countrys) {
  for (const country of countrys) {
    const languages = Object.values(country.languages);

    ulList.innerHTML += `<li class="js-true-country">
    <div class="js-true-country-title">
      <img class='js-true-country-flags' src=${country.flags.svg} alt="${country.name.official} flag">
      <p class="js-true-country-name">${country.name.official}</p>
    </div>
      <ul class="js-true-country-propertie">
        <li>
        <span class="js-true-country-subtitle">Capital:&nbsp</span>${country.capital} 
        </li>
        <li><span class="js-true-country-subtitle">Population:&nbsp</span> ${country.population} </li>
        <li><span class="js-true-country-subtitle">Languages:&nbsp</span> ${languages} </li>
        </ul>
      </li>`;
  }
}

function createListCountries(countrys) {
  for (const country of countrys) {
    ulList.innerHTML += `<li class="js-country">
      <img class='js-country-flags' src=${country.flags.svg} alt="${country.name.official} flag">
        <span>${country.name.official}</span>
      </li>`;
  }
}

function muchCountries() {
  Notiflix.Notify.info(
    'Too many matches found. Please enter a more specific name.'
  );
}

function noCountry() {
  Notiflix.Notify.failure('Oops, there is no country with that name');
}
