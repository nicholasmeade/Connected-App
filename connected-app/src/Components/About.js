import {Routes, Route, Link, Navigate} from "react-router-dom";
import CurrentTime from "./CurrentTime";
import jsIcon from './../Icons/JS.png';
import reactIcon from './../Icons/React.png';
import cssIcon from './../Icons/CSS.png';
import htmlIcon from './../Icons/HTML.png';

const About = () => {
    return ( 
        <div className="aboutdescription">
            <CurrentTime />
            <h1><span className="appname">Connected</span> was made using...</h1>
            <div className="webpage-development">
                <h2>Webpage Development:</h2>
                <ul className="language-icons">
                    <li><img src={reactIcon} alt="React Icon" /></li>
                    <li><img src={jsIcon} alt="JS Icon" /></li>
                    <li><img src={htmlIcon} alt="HTML Icon" /></li>
                    <li><img src={cssIcon} alt="CSS Icon" /></li>
                </ul>
            </div>
            <div className="data-utilization">
                <h2>Data Utilization:</h2>
                <h3>Weather API - A Free Weather API</h3>
                    <p>To obtain different weather data (i.e. current forecast and historical forecast), <a className="api-link" href="https://www.weatherapi.com/">Weather API</a> is utilized.</p>
                    <p>Two different API calls are run for current forecast data and historical forecast data. The API returns different data for these API calls.</p>
                    <p>The free version of <a className="api-link" href="https://www.weatherapi.com/">Weather API</a> has a historical forecast search back limit of 7 days.</p>
            </div>
            <footer className="about-footer">
                <button><Link className="return-home-link" to="/">Return to home</Link></button>
            </footer>
        </div>
     );
}
 
export default About;