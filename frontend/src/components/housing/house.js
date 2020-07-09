import React from 'react'


class House extends React.Component{

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

       

 </div>

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
