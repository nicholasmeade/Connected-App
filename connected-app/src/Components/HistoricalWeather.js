import HistoricalSearch from "./HistoricalSearch";
import {Routes, Route, Link, Navigate} from "react-router-dom";

const HistoricalWeather = () => {
    return ( 
        <div className="historical-container">
            <div className="historical-intro">
                <p>Be Connected to the world's past - choose a date and location to see what the weather was.</p>
            </div>
            <HistoricalSearch />
            <footer>
                <p><Link to="/about/">About</Link></p>
            </footer>
        </div>
     );
}
 
export default HistoricalWeather;