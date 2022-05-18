import HistoricalSearch from "./HistoricalSearch";
import CurrentTime from "./CurrentTime";
import {Routes, Route, Link, Navigate} from "react-router-dom";

const HistoricalWeather = () => {
    return ( 
        <div className="historical-container">
            <CurrentTime />
            <HistoricalSearch />
            <footer className="historical-footer">
                <button><Link className="aboutlink" to="/about/">About</Link></button>
                <button><Link className="return-home-link" to="/">Return to home</Link></button>
            </footer>
        </div>
     );
}
 
export default HistoricalWeather;