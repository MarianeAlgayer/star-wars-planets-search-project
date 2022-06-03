import React, { useEffect } from 'react';

import AppIntro from '../../components/AppIntro';
import PlanetsSearch from '../../components/PlanetsSearch';

function Home() {
  const TEN_SEC = 10000;

  useEffect(() => {
    setTimeout(() => {
      document.querySelector('#planets-search').scrollIntoView({
        behavior: 'smooth',
      });
    }, TEN_SEC);
  }, []);

  return (
    <main>
      <AppIntro />
      <PlanetsSearch />
    </main>
  );
}

export default Home;
