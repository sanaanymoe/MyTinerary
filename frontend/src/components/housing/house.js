import React from 'react'

class House extends React.Component{
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
        return (
            <div>
                <h2>Hotels</h2>
                <form onSubmit={this.handleSubmit} className="hotel-details-form"> 
                <label> 
                    <input type="date"  className="hotel-details-input"></input>  
                </label>
                <label> 
                    <input type="text" className="hotel-details-input"></input>  
                </label>
                <label> 
                    <input type="number" className="hotel-details-input"></input>  
                </label>
                <label> 
                    <input type="number" className="hotel-details-input"></input>  
                </label>
                <input type="submit"  className="hotel-details-form-submit"></input>
                </form>
            </div>
        )
    }
}

export default House;