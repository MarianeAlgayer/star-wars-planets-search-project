const filterPlanets = (planets, { name }, numericValues) => {
  const planetsFilteredByName = planets.filter((planet) => (
    planet.name.toLowerCase().includes(name.toLowerCase())
  ));

  const result = numericValues.reduce((acc, filter) => {
    const { comparison, column, value } = filter;

    return acc.filter((planet) => {
      switch (comparison) {
      case 'greater than':
        return Number(planet[column]) > value;

      case 'less than':
        return Number(planet[column]) < value;

      case 'equal to':
        return Number(planet[column]) === value;

      default:
        return true;
      }
    });
  }, planetsFilteredByName);

  return result;
};

export default filterPlanets;
