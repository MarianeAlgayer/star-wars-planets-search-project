import React, { useEffect } from 'react';
import { IoPlanet } from 'react-icons/io5';

import AppIntro from '../../components/AppIntro';
import Filters from '../../components/Filters';
import Table from '../../components/Table';

import './style.css';

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

      <div id="planets-search">
        <h1>
          Star Wars Planets Search
          {' '}
          <IoPlanet />
          {' '}
        </h1>

        <Filters />
        <Table />
      </div>
    </main>
  );
}

export default Home;
