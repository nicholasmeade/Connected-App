import CurrentSearch from "./CurrentSearch";
import {Routes, Route, Link, Navigate} from "react-router-dom";

const CurrentWeather = () => {
    // obtaining the user's local time
    const time = new Date().getTime();
    const date = new Date(time);

    // dynamic user greeting based on their time zone
    const userGreeting = () => {
        const userDate = new Date();
        const hour = userDate.getHours();
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
            <div className="user-greeting">
                <h1>{userGreeting()}</h1>
                <div className="local-time">
                    <h2>Your time is currently {date.toLocaleTimeString()}. Today's date is {date.toLocaleDateString()}.</h2>
                </div>
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