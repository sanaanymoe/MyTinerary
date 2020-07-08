import React from 'react'


class HotelShow extends React.Component {
    constructor(props){
        super(props)
    }

    render() {

         const image_url = this.props.hotel.photo.images.large.url
         const name = this.props.hotel.name 
         const avg_rating = this.props.hotel.rating
         const price  = this.props.hotel.price
        return (
             <div> 
                   <div className="hotel-image"> 
                      <img src={image_url}></img>


                   </div>
                      <h3>{name}</h3>      
                      <div> {avg_rating}</div>
                      <h2> {price}</h2>

             </div>
        )
    }
}

export default HotelShow;