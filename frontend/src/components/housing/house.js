import React from 'react'
import HotelsShow from './'
class Hotels extends React.Component{
    constructor(props){
        super(props)
        this.state = { checkInDate: "", rooms: "", totalGuest: "", locationId:"" }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

handleChange(type){
  return e => this.setState({[type]: e.target.value})
}

handleSubmit(e){
    e.preventDefault(); 
    this.props.getHotels(this.state);
}

    render(){
         const hotels = this.props.hotels
        return (
    <div>
        <form onSubmit={this.handleSubmit} className="hotel-details-form"> 
          <label> checkInDate(yyyy-mm-dd)
             <input type="date" onChange={}  className="hotel-details-input"></input>  
          </label>

          <label> totalRooms
             <input type="text" onChange={} className="hotel-details-input"> </input>  
          </label>

          <label> duration-in-days
             <input type="number" onChange={} className="hotel-details-input"> </input>  
          </label>

          <label> LocationId
             <input type="number" onChange={} className="hotel-details-input"></input>  
          </label>

            <input type="submit"  className="hotel-details-form-submit"></input>
        </form>

        if (hotels){
            hotels.map((hotel)=> <HotelsShow key={hotel.Id} hotel={hotel}/>)
        }

 </div>
        )
    }
}

export default Hotels;