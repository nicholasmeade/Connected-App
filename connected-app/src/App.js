import './App.css';
import {Routes, Route, Link, Navigate} from "react-router-dom";
import CurrentWeather from "./Components/CurrentWeather";
import HistoricalWeather from "./Components/HistoricalWeather";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Link className="weather-tab" to="/">Current Weather</Link>
        <Link className="historical-tab" to="/historicalweather/">Historical Weather</Link>
        <Link className="about-tab" to="/about/">About</Link>
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={<CurrentWeather />}/>
          <Route path="/historicalweather/" element={<HistoricalWeather />}/>
          <Route path="/about/" element={<About />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
