import './Components.css';
import { useEffect, useState } from 'react';

// API by city call = https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}
// open weather API info
const apiKey = "ecbafc8bc682243cadc5b7330751bcef"
const units = "&units=imperial"

const CurrentSearch = () => {
    // state for input search term
    const [searchWeather, setSearchWeather] = useState('');
    // state for weather info obtained when weather API is called
    const [userWeather, setUserWeather] = useState(null);
    // state for message to user if there is an invalid location searched
    const [errorMessage, setErrorMessage] = useState('');

    // capturing user's data input to update the state of searchWeather
    const updateSearchWeather = (event) => {
        setSearchWeather(event.target.value)
    }

    // handling submission of user's input (zipcode, state, country)
    const handleSubmit = (event) => {
        // prevent page reload when submitting form
        event.preventDefault()
        // fetching weather info from API
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchWeather}&appid=${apiKey}${units}`)
            .then(response => response.json())
            .then(data => {
                // reset input field to empty string
                setSearchWeather('');
                // if user input is invalid; has key/value pairs of "cod": "404" and "message": "city not found"
                // if (data === data.cod) {
                //     setErrorMessage(data.cod)
                // if user input is valid
                // } else {
                    setUserWeather(data)
                    setSearchWeather('')
                // }
            })
        // if there is an error upon API request
        .catch(() => setErrorMessage('Sorry, please try again'))
    }

    // create weather data display if weather data is in userWeather state
    let weatherDisplay = ''
    if (userWeather !== null) {
        weatherDisplay = (
            <div>
                <h2>{userWeather.name}'s current weather is...</h2>
                <h3>{userWeather.main.temp}°</h3>
                <h4>Today's high is {userWeather.main.temp_max}° and today's low is {userWeather.main.temp_min}°.</h4>
            </div>
        )
    }

    return ( 
        <div className="currentsearch-container">
            <div className="user-current-weather">
                <h2>Your weather today in (user location) is:</h2>
            </div>
            <div className="weather-data">
                <p>{errorMessage}</p>
                {weatherDisplay}
            </div>
            <div className="user-search-calltoaction">
                <h2>Be Connected - search anywhere in the world to see what the weather is!</h2>
                <form onSubmit={handleSubmit}>
                    <input onChange={updateSearchWeather} value={searchWeather} type="text" placeholder="Zip, Town, State or Country"/>
                    <input type="submit" value="Connect!" />
                </form>
            </div>
        </div>
     );
}

export default CurrentSearch;