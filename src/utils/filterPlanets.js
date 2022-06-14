const filterPlanets = (planets, { name }, numericValues) => {
  const planetsFilteredByName = planets.filter((planet) => (
    planet.name.toLowerCase().includes(name.toLowerCase())
  ));

  const result = numericValues.reduce((acc, filter) => {
    const { comparison, column, value } = filter;

    return acc.filter((planet) => {
      switch (comparison) {
      case 'maior que':
        return Number(planet[column]) > value;

      case 'menor que':
        return Number(planet[column]) < value;

      case 'igual a':
        return Number(planet[column]) === value;

      default:
        return true;
      }
    });
  }, planetsFilteredByName);

  return result;
};

export default filterPlanets;
