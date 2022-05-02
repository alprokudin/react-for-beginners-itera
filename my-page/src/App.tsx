import React from 'react';
import logo from './logo.svg';
import './App.css';

const aboutMe = { 
  firstName: 'Алексей',
  biography: 'Я родился в г. Бахмут Донецкой области 14 июня 1977 В 2005 закончил Артемовский Индустриальный техникум. Работаю с/х рабочим. Изучаю веб-программирование по курсам в интернете',
  contacts: 'E-mail: alprokudin77@gmail.com'  
}

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
