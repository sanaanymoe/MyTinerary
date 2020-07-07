const axios = require("axios");

const hotel = axios({
    "method": "GET",
    "url": "https://tripadvisor1.p.rapidapi.com/answers/list",
    "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
        "x-rapidapi-key": "cfb3eccdc5mshd5e85a8b49aa3c6p11ae92jsnc3d8b742a517",
        "useQueryString": true
    }, "params": {
        "limit": "10",
        "question_id": "5283833"
    }
})
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })

    export default  hotel ;