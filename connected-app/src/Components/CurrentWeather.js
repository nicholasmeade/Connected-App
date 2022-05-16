import CurrentSearch from "./CurrentSearch";
import {Routes, Route, Link, Navigate} from "react-router-dom";

const CurrentWeather = () => {
    return ( 
        <div className="current-container">
            <div className="user-greeting">
                <h1>Good (morning/afternoon/evening).</h1>
                <h2>It is currently (xx:xx) in (user location).</h2>
            </div>
            <div className="app-intro">
                <p>Welcome to Connected - a small space on the internet to feel more connected with all parts of the world, both now and in the past.</p>
            </div>
            <CurrentSearch />
            <footer>
                <p><Link to="/about/">About</Link></p>
            </footer>
        </div>
     );
}
 
export default CurrentWeather;