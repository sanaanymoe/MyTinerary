# MyTinerary
MyTinerary is a web application that allows you to plan, customize, and visualize one or many of your trips.

## Background and Overview

 Users can sign up for a **MyTinerary** account and then view a gallery of trips that they have created. When creating a new trip, a user can select their current location, travel destination, and select the dates of travel. **MyTinerary** users can then continue to fill out similar information for their trip's housing as well as for any events they may have planned on their trip. The user can then, after navigating to the ***My Trips*** link, see this trip and any other created trips. All relevant trip information is then shown when the user clicks on the created trip.


## Technologies

 ### MERN Stack
 
 - **Backend: MongoDB/Express**
**Our Trip Schema**
 ``` var Trip = mongoose.model("trip", {
    user: {
        type: Schema.Types.ObjectId,
        ref: "users",
    },
  title: String,
  flight: {
    startLocation: String,
    endLocation: String,
    startDate: Date,
    endDate: Date
  },
  housing: {
    location: String,
    startDate: String,
    endDate: String

  },
  event: {
    location: String,
    date: Date
  },
}); 
```


 
 -  **Frontend: React/Node.js**
 
 **Session API Util**
 ```  
import axios from 'axios';

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const signup = (userData) => {
  return axios.post('/api/users/register', userData);
};

export const login = (userData) => {
  return axios.post('/api/users/login', userData);
};
```

 ### Future Technologies
  - **Flight API**
	 - Flight information can be input by user and a list of flights matching the criteria will be displayed for the user.
	 - Possible API: **TripAdvisor**
  - **Housing API**
	   - Housing information can be input by user and a list of housing matching the criteria will be displayed for the user.
    - Possibly API: **Airbnb**
  - **Event API**
	   - Event information can be input by user and a list of events matching the criteria will be displayed for the user.
    - Possibly API: **Yelp**/**TripAdvisor**/**EventBrite**
    
 

## Future Implementation
When creating a new trip, a user will be able to select their travel destination and then access flight, housing, and event components. A user will be able to see a list of flights, housing options, and local events and add these features to their trip planner. After adding travel criteria to their trip, the user may then access a filled out calendar that will give them a day by day overview of their trip itinerary. A user will be able to share a created trip with a friend on their **MyTinerary** friend's list. The friend can then choose to accept the trip and add it to their own trips.

## Walkthrough
![Image of Site](https://github.com/sanaanymoe/MyTinerary/blob/master/screen_shot_2020-07-10_at_11.09.58_am.png)
 1. User can Login or Signup on splash page.
 2. Once logged in, a user can then navigate tp **New Trip** to create a new trip.
 3. For the new trip, a user can then add in all of the given details about their trip.
 4. Upon pressing the submit button, the new trip has been created.
 5. This trip is then accessible under the tab **My Trips** in which a user can see all trips associated with their account.
 6. Clicking on a trip will then  show all the details of the trip that the user filled out. 
 
 ## Live Link
 Hosted on Heroku
 http://mytinerary2020.herokuapp.com/



