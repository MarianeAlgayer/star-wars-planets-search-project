const filterPlanets = (planets, { name }) => {
  const planetsFilteredByName = planets.filter((planet) => (
    planet.name.toLowerCase().includes(name.toLowerCase())
  ));

  return planetsFilteredByName;
};

export default filterPlanets;
