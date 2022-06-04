const fetchPlanets = async () => {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const response = await fetch(URL);
  const { results } = await response.json();

  results.forEach((planet) => {
    delete planet.residents;
  });

  return results;
};

export default fetchPlanets;
