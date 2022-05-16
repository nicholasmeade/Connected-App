import './Components.css';

const CurrentSearch = () => {
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