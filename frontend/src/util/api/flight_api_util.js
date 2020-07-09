import axios from 'axios';

export const getFlights = (Airportorigin, Airportdestination, date, totalAdult) => {
    return axios({
            "method":"GET",
            "url":"https://tripadvisor1.p.rapidapi.com/flights/create-session",
            "headers": {
                 "content-type":"application/octet-stream",
                 "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
                 "useQueryString":true
            }, 
            "params": {
                "currency":"USD",
                "ta":totalAdult,
                "ts":"0",
                "tc":"0",
                "c":"0",
                "d1":Airportdestination,
                "o1":Airportorigin,
                "dd1":date
            }
    })
}


    
