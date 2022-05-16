import CurrentSearch from "./CurrentSearch";

const CurrentWeather = () => {
    return ( 
        <div className="container">
            <div className="user-greeting">
                <h1>Good (morning/afternoon/evening).</h1>
                <h2>It is currently (xx:xx) in (user location).</h2>
            </div>
            <div className="app-intro">
                <p>Welcome to Connected - a small space on the internet to feel more connected with all parts of the world, both now and in the past.</p>
            </div>
            <CurrentSearch />
        </div>
     );
}
 
export default CurrentWeather;