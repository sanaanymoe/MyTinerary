const axios = require("axios");

 export const  getFlights= (origin, destination, date)=> {
     return  daxios({
         "method": "GET",
         "url": "https://tripadvisor1.p.rapidapi.com/flights/create-session",
         "headers": {
             "content-type": "application/octet-stream",
             "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
             "x-rapidapi-key": "cfb3eccdc5mshd5e85a8b49aa3c6p11ae92jsnc3d8b742a517",
             "useQueryString": true
         }, "params": {
             "currency": "USD",
             "ta": "1",
             "c": "0",
             "d1": destination,
             "o1": origin,
             "dd1": date
         }
     })
     
}

    