const sortPlanets = (planets, { order: { column, sort } }) => {
  const filteredArray = planets
    .filter((planet) => planet[column] !== 'unknown');

  const unknownValues = planets
    .filter((planet) => planet[column] === 'unknown');

  const sortedArray = filteredArray.sort((a, b) => {
    switch (sort) {
    case 'ASC':
      return a[column] - b[column];

    case 'DESC':
      return b[column] - a[column];

    default:
      return true;
    }
  });

  return [...sortedArray, ...unknownValues];
};

export default sortPlanets;
