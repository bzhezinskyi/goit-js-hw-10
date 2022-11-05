export default function fetchCountries() {
  const URL = `https://restcountries.com/v3.1/`;
  const name = 'ukrain';
  const filter = 'fields=name,capital,population,flags,languages ';

  fetch(`${URL}name/${name}?${filter}`)
    .then(response => response.json())
    .then();
}
