import React from 'react';

import AppIntroGif from './AppIntro.gif';

import './style.css';

function AppIntro() {
  return (
    <section id="app-intro">
      <img src={ AppIntroGif } alt="App intro gif" />
    </section>
  );
}

export default AppIntro;
