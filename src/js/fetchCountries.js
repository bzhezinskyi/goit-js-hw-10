export default function fetchCountries(query) {
  const URL = `https://restcountries.com/v3.1/`;
  const filter = 'fields=name,capital,population,flags,languages ';

  return fetch(`${URL}name/${query}?${filter}`).then(response =>
    response.json()
  );
}
