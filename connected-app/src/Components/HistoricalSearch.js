import './Components.css';
import { useEffect, useState } from 'react';

// API historical call: weatherapi.com
// API template: https://api.weatherapi.com/v1/history.json?key={APIKey}&q=new york{searchedLocation}&dt=2022-05-15{searchedDate}
// API historical call limited to 7 days in past
// API key: e15eb896014246a5824164647221705
const apiKey = "e15eb896014246a5824164647221705"

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
        fetch(`https://api.weatherapi.com/v1/history.json?key=${apiKey}&q=new york&dt=2022-05-15`)
            .then(response => response.json())
            .then(data => console.log(data.forecast.forecastday[0].date))
            // .then(response => response.json())
            // .then(data => {
            //     // reset both input fields to be empty strings
            //     setSearchLocation('')
            //     setSearchDate('')
            //     setUserWeather(data)
            // })
    }

    // create weather display if weather data is in userWeather state
    // let historicalWeatherDisplay = ''
    // if (userWeather !== null) {
    //     historicalWeatherDisplay = (
    //         <div>
    //             <h2> On {userWeather.forecast.forecastday[0].date}, {userWeather.location.name} weather forecast was...</h2>
    //             <h3></h3>
    //         </div>
    //     )
    // }

    // how to properly fetch the data from API
    // capturing the date input (YYYY-MM-DD): {data.forecast.forecastday[0].date}

    return ( 
        <div className="historicalsearch-container">
            <div className="historical-calltoaction">
                <h2>Be Connected to the world's past - choose a date and location to see what the weather was.</h2>
                <form onSubmit={handleSubmit}>
                    <input onChange={updateSearchLocation} value={searchLocation} type="text" placeholder=""/>
                    <input onChange={updateSearchDate} value={searchDate} type="text" placeholder=""/>
                    <input type="submit" value="Connect!"/>
                </form>
            </div>
        </div>
     );
}
 
export default HistoricalSearch;