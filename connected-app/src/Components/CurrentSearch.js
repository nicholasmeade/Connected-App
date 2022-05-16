import './Components.css';
import { useEffect } from 'react';

const CurrentSearch = () => {

// open weather API info
const apiKey = "ecbafc8bc682243cadc5b7330751bcef"
const url = "https://api.openweathermap.org/data/2.5/weather?lat=40.7128&lon=-74.0060&appid="

// fetching weather info from API
useEffect(() => {
    fetch(`${url}${apiKey}`)
    .then(response => response.json())
    .then(data => console.log(data))
})

    return ( 
        <div className="currentsearch-container">
            <div className="user-current-weather">
                <h2>Your weather today in (user location) is:</h2>
            </div>
            <div className="weather-data">
                <ul>
                    <li>Current Temperature</li>
                    <li>High Temperature</li>
                    <li>Low Temperature</li>
                </ul>
            </div>
            <div className="user-search-calltoaction">
                <h2>Be Connected - search anywhere in the world to see what the weather is!</h2>
                <form>
                    <input type="text"></input>
                </form>
            </div>
        </div>
     );
}

export default CurrentSearch;