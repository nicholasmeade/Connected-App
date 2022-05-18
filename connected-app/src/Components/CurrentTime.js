 // obtaining the user's local time
 const time = new Date().getTime();
 const date = new Date(time);

const CurrentTime = () => {
    return ( 
        <div className="corner-time">
            <h3>Your time: {date.toLocaleTimeString()}</h3>
        </div>
     );
}
 
export default CurrentTime;