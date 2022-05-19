import './Components.css';
import { useEffect, useState } from 'react';
import HistoricalWeather from './HistoricalWeather';
import {Routes, Route, Link, Navigate} from "react-router-dom";

// API template: https://api.weatherapi.com/v1/current.json?key={apiKey}&q={searchedLocation}&aqi=no
// API key: e15eb896014246a5824164647221705
const apiKey = "e15eb896014246a5824164647221705"

const CurrentSearch = () => {
    // state for searching location term
    const [searchLocation, setSearchLocation] = useState('');
    // state for weather info obtained when weather API is called
    const [userWeather, setUserWeather] = useState(null);
    // state for message to user if there is an invalid location searched
    const [errorMessage, setErrorMessage] = useState('');

     // capturing user's data input to update the state of searchLocation
     const updateSearchLocation = (event) => {
        setSearchLocation(event.target.value)
    }

    // running API call once form is submitted
    const handleSubmit = (event) => {
        // prevent page reload when submitting form
        event.preventDefault()
        // fetching weather info from API
        fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchLocation}&aqi=no`)
            .then(response => response.json())
            .then(data => {
                // reset input field of searchLocation to be an empty string
                setSearchLocation('')
                // if user input is invalid; starts with object "error", which contains an object of ""code:" 1006, "message": No matching location found.""
                if (data.error) {
                    // save error data to error message
                    setErrorMessage(data.error)
                    // reset userWeather
                    setUserWeather(null)
                // if user input is valid
                } else {
                    // set userWeather to be the data fetched by the API
                    setUserWeather(data)
                    // reset errorMessage (if the user previously had the error message so it's no longer on the screen)
                    setErrorMessage('')
                }
            })
        // if there is an error upon API request    
        .catch(() => setErrorMessage('Sorry, please try again'))
    }

    // create weather data display if weather data is in userWeather state
    let weatherDisplay = ''
    if (userWeather !== null) {
        weatherDisplay = (
            <div className="search-result">
                <h2>{userWeather.location.name}, {userWeather.location.country}'s current weather is...</h2>
                <h2>{userWeather.current.temp_f}°F</h2>
                <h3>The current feels-like temperature is {userWeather.current.feelslike_f}°F.</h3>
                <h3>The current condition is "{userWeather.current.condition.text}".</h3>
                <h3><img src={userWeather.current.condition.icon} alt="Weather condition icon"/></h3>
                <h3>Want to try <span className="appname">Connecting</span> to the past? Try <Link className="searchhistorylink"  to="/historicalweather/">Historical Weather!</Link></h3>
            </div>
        )
    }

    return ( 
        <div className="currentsearch-container">
            <div className="weather-data">
                <p>{errorMessage.message}</p>
                {weatherDisplay}
            </div>
            <div className="user-search-calltoaction">
                <h2><span className="appname">Be Connected</span><span className="calltoaction"> - search anywhere in the world to see what the weather is!</span></h2>
                <form onSubmit={handleSubmit}>
                    <input onChange={updateSearchLocation} value={searchLocation} type="text" placeholder="Zip, Town, State or Country"/>
                    <input className="user-submit-button" type="submit" value="Connect!" />
                </form>
            </div>
        </div>
     );
}

export default CurrentSearch;