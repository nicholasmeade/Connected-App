# Project Overview

## Project Links

- [GitHub Enterprise](https://git.generalassemb.ly/nickmeade94/project-2-react)

## Project Description

My React App project will be an interactive Weather based app called Connected.

The goal is for an interactive user experience to be 'connected' to other parts of the world and to search for what the current weather is based upon searching a zipcode and/or a location. The user is presented with a specialized greeting based on their location of what time it is and what their current weather is upon screen load. When they do their search below where this is presented, an API call is executed to update the weather stats of the location they looked up.

An additional page for interactivity will be Historical Weather. The user can interact to be 'connected' to other parts of the world and search up a location and choose a specific date to see what the weather would have been.

An About page will be included to summarize what was used to create the app - webpage development and data utilization with the API(s) used.

## API

Use this section to include info about the API you have chosen and a code snippet of the data that it returns and is required for your project.

I've had some prior experience in our cohort with the Open Weather API. I researched a lot of other weather APIs, a lot of them on the general reference for free APIs had a limited scope for 'free' accounts, mostly locking me out of looking at historical data behind a pay wall. For the sake of a MVP I can utilize the Open Weather API for both the current weather and historical weather (limited to a few hours ago as far as I can understand, will be doing more experimentation) API calls I will be making.

An example of the Open Weather API being used can be seen in the code block below:

```
const apiKey = "ecbafc8bc682243cadc5b7330751bcef"
const url = "https://api.openweathermap.org/data/2.5/weather?lat=40.7128&lon=-74.0060&appid="

useEffect(() => {
  fetch(`${url}${apiKey}`)
  .then(response => response.json())
  .then(data => console.log(data))
})
```

An example of the console.log output of 'current weather' of a given lat/long input can be seen below:

```
{
    "coord": {
        "lon": -74.0067,
        "lat": 40.7051
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 293.05,
        "feels_like": 293.24,
        "temp_min": 288.72,
        "temp_max": 296.99,
        "pressure": 1023,
        "humidity": 82
    },
    "visibility": 10000,
    "wind": {
        "speed": 2.57,
        "deg": 60
    },
    "clouds": {
        "all": 100
    },
    "dt": 1652475959,
    "sys": {
        "type": 2,
        "id": 2039034,
        "country": "US",
        "sunrise": 1652434860,
        "sunset": 1652486633
    },
    "timezone": -14400,
    "id": 5128581,
    "name": "New York",
    "cod": 200
}
```

## Wireframes

- [Figma Wireframe](https://www.figma.com/file/u2rF5rWZXEG7n9LIIaJ1ov/React-App-Project?node-id=0%3A1)

Define the the React components and the architectural design of your app.

Taken from the Wireframe:

- landing page will display the current local weather forecast specific to the user location with an API call
- landing page and subsequent pages will display the current time specific to the user location
- search feature to look by zipcode and/or city to display weather in other parts of the world
- upon searching the API call will run to extract the specific data to be back on to the page
- secondary page will be running another API call to look at historical weather data at a certain time period and location
- two minimum routes will be to the historical weather component and to an ‘about’ component that describes the API used for the project
- minimum five components will be: CurrentWeather.js - HistoricalWeather.js - About.js - UserTime.js - CurrentSearch.js - HistoricalSearch.js

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MVP and PostMVP.  Carefully decide what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP EXAMPLE
- Find and use external api 
- Render data on page 
- Allow user to interact with the page

#### PostMVP EXAMPLE

- Add localStorage or firebase for storage

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.

##### Although not required in the proposal as above I may make this table next week.

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Footer | This will render the header include the nav | 

##### Time Frames for Project 2

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Project Development, Wireframes, Research | H | 5hrs| 5hrs | 5hrs |
| Create React App Environment | H | 1hr| TBD | TBD |
| Create All Components Structure | H | 4hrs| TBD | TBD |
| Create Header/Footer | H | 2hrs| TBD | TBD |
| Establish all API calls | H | 8hrs| TBD | TBD |
| Create Routes for structure | H | 3hrs| TBD | TBD |
| Styling for each page | M | 5hrs| TBD | TBD |
| Styling for each component | M | 3hrs| TBD | TBD |
| Total | H | 31hrs| TBD | TBD |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc.

##### [StackOverFlow for obtaining user's local time](https://stackoverflow.com/questions/4673527/converting-milliseconds-to-a-date-jquery-javascript)
##### [MDN Docs, Especially with Obtaining User Date/Time Data](https://developer.mozilla.org/en-US/)
##### [C-SharpCorner](https://www.c-sharpcorner.com/blogs/greeting-to-the-user-according-to-the-time-using-javascript1)
- helped walk through an example to have a 'welcome' message to a user based upon their local time
- added my own logic for what I specifically wanted to do, received help from instructor with correcting my function
##### [CodeGrepper](https://www.codegrepper.com/code-examples/css/background+color+gradient+no+repeat+full+screen)
- helped to figure out how to make my background gradient of my webpage not repeat encompassing the entire React App

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
