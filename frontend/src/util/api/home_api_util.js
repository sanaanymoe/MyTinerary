import axios from "axios"
export const getHousing = (checkInDate, rooms, nights, totalGuest, locationId = 293919) =>{
    return axios({
    "method": "GET",
    "url": "https://tripadvisor1.p.rapidapi.com/hotels/list",
    "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
        "x-rapidapi-key": "cfb3eccdc5mshd5e85a8b49aa3c6p11ae92jsnc3d8b742a517",
        "useQueryString": true
    }, "params": {
        "offset": "0",
        "currency": "USD",
        "limit": "30",
        "order": "asc",
        "lang": "en_US",
        "sort": "recommended",
        "location_id": locationId,
        "adults": totalGuest,
        "checkin": checkInDate,
        "rooms": rooms,
        "nights": nights
    }
})
   
}