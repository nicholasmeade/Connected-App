import './Components.css';
import { useEffect, useState } from 'react';

// API historical call: weatherapi.com
// API template: https://api.weatherapi.com/v1/history.json?key={APIKey}&q=new york{searchedLocation}&dt=2022-05-15{searchedDate}
// API historical call limited to 7 days in past
// API key: e15eb896014246a5824164647221705
const apiKey = "e15eb896014246a5824164647221705"

// how to properly fetch the data from API
    // capturing the date input (YYYY-MM-DD): {userWeather.forecast.forecastday[0].date}
    // capturing sunrise (xx:xx AM): {userWeather.forecast.forecastday[0].astro.sunrise}
    // capturing sunset (xx:xx PM): {userWeather.forecast.forecastday[0].astro.sunset}
    // capturing max temp (temp(F)): {userWeather.forecast.forecastday[0].day.maxtemp_f}
    // capturing min temp (temp(F)): {userWeather.forecast.forecastday[0].day.mintemp_f}
    // capturing the condition (code, icon, text(condition)): {userWeather.forecast.forecastday[0].day.condition.code/icon/text}
    // capturing the average temp (temp(F)): {userWeather.forecast.forecastday[0].day.avgtemp_f}
    // capturing the weather conditions per hour in the day (military time): {userWeather.forecast.forecastday[0].hour[0-24]}
    // capturing the temp (temp(F)) at selected hour: {userWeather.forecast.forecastday[0].hour[0-24].temp_f}
    // capturing the feels-like temp (temp(F)) at selected hour: {userWeather.forecast.forecastday[0].hour[0-24].feelslike_f}
    // capturing the condition at that individual hour (code, icon, text(condition)): {userWeather.forecast.forecastday[0].hour[0-24].condition.code/icon/text}

const HistoricalSearch = () => {
    // state for searching location term
    const [searchLocation, setSearchLocation] = useState('');
    // state for searching date for historical forecast
    const [searchDate, setSearchDate] = useState('');
    // state for weather info obtained when weather API is called
    const [userWeather, setUserWeather] = useState(null);
    // state for message to user if there is an invalid location searched
    const [errorMessage, setErrorMessage] = useState('');

    // capturing user's data input to update the state of searchLocation
    const updateSearchLocation = (event) => {
        setSearchLocation(event.target.value)
    }

    // capturing user's data input to update the state of searchDate
    const updateSearchDate = (event) => {
        setSearchDate(event.target.value)
    }

    // handling submission of user's input (location and date in past for historical data)
    const handleSubmit = (event) => {
        //prevent page reload when submitting form
        event.preventDefault()
        // fetching weather info from API
        fetch(`https://api.weatherapi.com/v1/history.json?key=${apiKey}&q=${searchLocation}&dt=${searchDate}`)
            .then(response => response.json())
            .then(data => {
                // reset both input fields to be empty strings
                setSearchLocation('')
                setSearchDate('')
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

    // create weather display if weather data is in userWeather state
    let historicalWeatherDisplay = ''
    if (userWeather !== null) {
        historicalWeatherDisplay = (
            <div>
                <h2>On {userWeather.forecast.forecastday[0].date}, {userWeather.location.name}'s weather forecast was...</h2>
                <h3>An average temperature of {userWeather.forecast.forecastday[0].day.avgtemp_f}°F.</h3>
                <h3>The high was {userWeather.forecast.forecastday[0].day.maxtemp_f}°F and the low was {userWeather.forecast.forecastday[0].day.mintemp_f}°F.</h3>
                <h3>Sunrise was at {userWeather.forecast.forecastday[0].astro.sunrise} and sunset was at {userWeather.forecast.forecastday[0].astro.sunset}.</h3>
                <h2>If you were in {userWeather.location.name} at 12PM on {userWeather.forecast.forecastday[0].date}...</h2>
                <h3>The current temperature was {userWeather.forecast.forecastday[0].hour[12].temp_f}°F.</h3>
                <h3>The feels-like temperature was {userWeather.forecast.forecastday[0].hour[12].feelslike_f}°F.</h3>
                <h3>If you were outside at 12PM, the current condition was "{userWeather.forecast.forecastday[0].hour[12].condition.text}".</h3>
                <h3><img src={userWeather.forecast.forecastday[0].hour[12].condition.icon} alt="Weather condition icon"/></h3>
            </div>
        )
    }

    return ( 
        <div className="historicalsearch-container">
            <div className="historical-search-display">
                <p>{errorMessage.message}</p>
                {historicalWeatherDisplay}
            </div>
            <div className="historical-calltoaction">
                <h2>Be Connected to the world's past - choose a date and location to see what the weather was!</h2>
                <form onSubmit={handleSubmit}>
                    <input onChange={updateSearchLocation} value={searchLocation} type="text" placeholder="Zip, Town, State or Country"/>
                    <input onChange={updateSearchDate} value={searchDate} type="text" placeholder="Date (YYYY-MM-DD)"/>
                    <input type="submit" value="Connect!"/>
                </form>
            </div>
        </div>
     );
}
 
export default HistoricalSearch;