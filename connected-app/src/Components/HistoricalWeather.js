import HistoricalSearch from "./HistoricalSearch";
import CurrentTime from "./CurrentTime";
import {Routes, Route, Link, Navigate} from "react-router-dom";

const HistoricalWeather = () => {
    return ( 
        <div className="historical-container">
            <CurrentTime />
            <HistoricalSearch />
            <footer className="historical-footer">
                <p><Link to="/about/">About</Link></p>
                <p><Link to="/">Return to home</Link></p>
            </footer>
        </div>
     );
}
 
export default HistoricalWeather;