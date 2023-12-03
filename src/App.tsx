import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Каких целей хотите достичь</h2>
        <p>Иметь структурированные знания по react и использовать его наиболее эффективно в повседневной работе.</p>
        <h2>Какими технологиями уже владеете</h2>
        <p>PHP, Symfony, Laravel, Mysql, Redis, Elasticsearch</p>
        <h2>расскажите о себе и своем опыте</h2>
        <p>Олег, 33 года, г. Калининград. 2 Года работаю бэкэнд разработчиком на PHP. Хочу добавить несколько фронтэнд технологий в свой стек. Параллельно учусь на курсе по Vuejs. </p>
      </header>
    </div>
  );
}

export default App;
