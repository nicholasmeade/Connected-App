import CurrentSearch from "./CurrentSearch";
import {Routes, Route, Link, Navigate} from "react-router-dom";

const CurrentWeather = () => {
    // obtaining the user's local time
    const time = new Date().getTime();
    const date = new Date(time);

    // dynamic user greeting based on their time zone
    const userGreeting = () => {
        // obtain the current date and hour of the user
        const userDate = new Date();
        const hour = userDate.getHours();
        // logic to toggle between greetings based on the hour
        let greeting
            if (hour < 12) {
                greeting = "Good morning!"
            } else if (hour >= 12 && hour < 17) {
                greeting = "Good afternoon!"
            } else if (hour >= 17 && hour < 24) {
                greeting = "Good evening!"
            } else {
                greeting = "invalid time"
            }
        return greeting
    }

    return ( 
        <div className="current-container">
            <div className="local-time">
                    <h2>Today's date is {date.toLocaleDateString()}</h2>
                    <h2>Your time is currently {date.toLocaleTimeString()}</h2>
            </div>
            <div className="user-greeting">
                <h2>{userGreeting()}</h2>
            </div>
            <div className="app-intro">
                <p>Welcome to <span className="appname">Connected</span> - a small space on the internet to feel more connected with all parts of the world, both now and in the past.</p>
            </div>
            <CurrentSearch />
            <footer className="currentweather-footer">
                <button><Link className="aboutlink" to="/about/">About</Link></button>
            </footer>
        </div>
     );
}

export default CurrentWeather;