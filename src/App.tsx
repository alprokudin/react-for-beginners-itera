import React from 'react';
import logo from './logo.svg';
import './App.css';
import aboutMe from './aboutMe.json';

function App() {
  return (
    <div className="App">
      <h1>Моя краткая биография</h1>
      <p>Меня зовут {aboutMe.firstName}</p>
      <p>{aboutMe.biography}</p>
      <p>{aboutMe.contacts}</p>
    </div>
  );
}

export default App;
