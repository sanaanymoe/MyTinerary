import {connect}  from 'react'; 
import {getHotels} from '../../actions/housing_actions'
import {Hotels} from './house'
const mapst = state=> {
    return {
        hotels : state.entitites.hotels
    }
}

const mapdt = disptach => {
    return {
        getHotels: (checkInDate, rooms, nights, totalGuest, locationId) => disptach(getHotels(checkInDate, rooms, nights, totalGuest, locationId))
    }
}

export default connect(mapst, mapdt)(Hotels)