import React from 'react'; 
import MyCalender from '../main/calendar'
 
class UserProfile extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
          <div className="profile-outer"> 
             
              <MyCalender className="profile-calendar"/>
             
             <div className="profile-details">

             </div>

          </div>
        )
    }
}

export default UserProfile;
