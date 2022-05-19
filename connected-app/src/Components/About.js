import {Routes, Route, Link, Navigate} from "react-router-dom";
import CurrentTime from "./CurrentTime";

const About = () => {
    return ( 
        <div className="aboutdescription">
            <CurrentTime />
            <h2>Connected was made using...</h2>
            <div className="webpage-development">
                <h3>Webpage Development:</h3>
                <p>REACT - JS - HTML - CSS</p>
            </div>
            <div className="data-utilization">
                <h3>Data Utilization:</h3>
                <h4>Open Weather Map API</h4>
                    <p>Description of data pulled</p>
                    <p>Description of different API calls on both pages</p>
                <h4>API source for time/location of user</h4>
                    <p>Description of data pulled</p>
                    <p>Description of different API calls on both pages</p>
            </div>
            <footer className="about-footer">
                <button><Link className="return-home-link" to="/">Return to home</Link></button>
            </footer>
        </div>
     );
}
 
export default About;