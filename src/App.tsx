import { FC } from 'react';
import './App.css';
type AppProps = { text: string };
var textBio = "Я родился в г. Бахмут Донецкой области 14 июня 1977 В 2005 закончил Артемовский Индустриальный техникум. Работаю с/х рабочим. Изучаю веб-программирование по курсам в интернете";
var textContacts = "E-mail: test77@gmail.com";
const Name: FC<AppProps> = (props) => (
  <p>Меня зовут {props.text}</p>
);

const AboutMe: FC<AppProps> = (props) => (
  <p>{props.text}</p>
);

function App() {
  return (
    <div className="App">
      <h1>Моя краткая биография</h1>
      <Name text="Алексей"/>
      <AboutMe text={textBio} />
      <AboutMe text={textContacts} />
    </div>
  );
}

export default App;
