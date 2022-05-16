import './App.css';
import {Routes, Route, Link, Navigate} from "react-router-dom";
import CurrentWeather from "./Components/CurrentWeather";
import HistoricalWeather from "./Components/HistoricalWeather";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Link to="/">Current Weather</Link>
        <Link to="/historicalweather/">Historical Weather</Link>
        <Link to="/">-Connected-</Link>
        <Link to="/about/">About</Link>
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
