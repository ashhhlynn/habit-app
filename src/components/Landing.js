import React, { Component } from 'react'
import MyCalendar from './MyCalendar'
import CurrentUser from './CurrentUser'
import YourHabits from './YourHabits'
import { Segment, Header, Divider} from 'semantic-ui-react'


class Landing extends Component {
          
    constructor(props){  
        super(props);  
        this.state = {  
           currentUser: []
          }  
        }

    
    componentDidMount = () =>
    {
        const token = localStorage.token;
        console.log(token)
        return fetch('http://localhost:3000/profile', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
        },
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.message) {
                localStorage.removeItem("token")
            }
            else {

                this.setState({currentUser: data.user})

                console.log(data.user)
            }            
        })
      
    }


    render() {

        return (
          
        
       !this.state.currentUser ?
  <div className="landingpg">
    
    <h1 style={{fontFamily:"segoe Script", fontSize:"44px"}}>Habitify</h1>
                <Divider></Divider>
    
   <center><Segment style={{width:"700px"}}>
<CurrentUser/></Segment></center> 




           </div> 
           :
        

           <YourHabits/>
       )
    
}

}
export default Landing