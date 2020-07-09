import React from 'react'
import HotelsShow from './'
export class Hotels extends React.Component{
    constructor(props){
        super(props)
        this.state = { location: "", price: "", startDate: "", endDate: "" }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

handleChange(type){
  return e => this.setState({[type]: e.target.value})
}

handleSubmit(e){
    e.preventDefault(); 
    this.props.getHotels(this.state);

    // const housingData = this.state
}

    render(){
         const hotels = this.props.hotels
        return (
    <div>
        <form onSubmit={this.handleSubmit} className="hotel-details-form"> 
            <label> startDate
             <input type="date" onChange={this.handleChange("startDate")}  className="hotel-details-input"></input>  
          </label>

          <label> location
             <input type="text" onChange={this.handleChange('location')} className="hotel-details-input"> </input>  
          </label>

         <label> price
             <input type="string" onChange={this.handleChange('price')} className="hotel-details-input"> </input>  
          </label>

            <label> endDate
             <input type="number" onChange={this.handleChange('endDate')} className="hotel-details-input"></input>  
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

export const housingData;





