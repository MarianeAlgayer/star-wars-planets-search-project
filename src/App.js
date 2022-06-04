import React from 'react';

import PlanetsProvider from './context/PlanetsProvider';
import Home from './pages/Home';

import './styles/main.css';

function App() {
  return (
    <PlanetsProvider>
      <Home />
    </PlanetsProvider>
  );
}

export default App;
