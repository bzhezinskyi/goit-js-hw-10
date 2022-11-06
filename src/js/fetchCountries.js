import Notiflix from 'notiflix';

const ulList = document.querySelector('.country-list');

export default function fetchCountries(query) {
  const URL = `https://restcountries.com/v3.1/`;
  const filter = 'fields=name,capital,population,flags,languages ';

  fetch(`${URL}name/${query}?${filter}`)
    .then(response => response.json())
    .then(arrey => {
      if (arrey.length === 1) {
        cteateTrueCountry(arrey);
      } else if (arrey.length <= 10 && arrey.length > 1) {
        createListCountries(arrey);
      } else if (arrey.length > 10) {
        ulList.innerHTML = '';
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else {
        ulList.innerHTML = '';
        Notiflix.Notify.failure('Oops, there is no country with that name');
      }
    });
}

function cteateTrueCountry(countrys) {
  ulList.innerHTML = '';
  for (const country of countrys) {
    const languages = Object.values(country.languages);

    ulList.innerHTML += `<li class="js-true-country">
    <div class="js-true-country-title">
      <img class='js-true-country-flags' src=${country.flags.svg} alt=${country.name.official} flags>
      <p class="js-true-country-name">${country.name.official}</p>
    </div>
      <ul class="js-true-country-propertie">
        <li>
        <span class="js-true-country-subtitle">Capital: </span>${country.capital} 
        </li>
        <li><span class="js-true-country-subtitle">Population: </span> ${country.population} </li>
        <li><span class="js-true-country-subtitle">Languages: </span> ${languages} </li>
        </ul>
      </li>`;
  }
}

function createListCountries(countrys) {
  ulList.innerHTML = '';

  for (const country of countrys) {
    ulList.innerHTML += `<li class="js-country">
      <img class='js-country-flags' src=${country.flags.svg} alt=${country.name.official} flags>
        <span>${country.name.official}</span>
      </li>`;
  }
}
