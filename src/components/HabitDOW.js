import React, { Component } from 'react'
import { Label } from 'semantic-ui-react'


class HabitDOW extends Component {
  

       state = {  
            Monday: false,
            Tuesday: false,
            Wednesday: false,
            Thursday: false,
            Friday: false,
            Saturday: false,
            Sunday: false,
        }  
    
    componentDidMount = () => {
        if (this.props.habit.day_of_weeks.find(d => d.name === "Monday")){
        this.setState ({
            Monday: true 
            })
        }

        if (this.props.habit.day_of_weeks.find(d => d.name === "Tuesday")){
            this.setState ({
                Tuesday: true 
                })
            }
        
            if (this.props.habit.day_of_weeks.find(d => d.name === "Wednesday")){
                this.setState ({
                    Wednesday: true 
                    })
                }

                if (this.props.habit.day_of_weeks.find(d => d.name === "Thursday")){
                    this.setState ({
                        Thursday: true 
                        })
                    }

                if (this.props.habit.day_of_weeks.find(d => d.name === "Friday")){
                    this.setState ({
                        Friday: true 
                        })
                    }

                    
                if (this.props.habit.day_of_weeks.find(d => d.name === "Saturday")){
                    this.setState ({
                        Saturday: true 
                        })
                    }

                    
                if (this.props.habit.day_of_weeks.find(d => d.name === "Sunday")){
                    this.setState ({
                       Sunday: true 
                        })
                    }    
    }

    render() {
      
        return (
          <>
            {this.state.Monday === false ?
            <Label style={{ justifyContent: "center", textAlign:"center"}} circular size="large" color="white">M </Label>:     
            <Label style={{ justifyContent: "center", textAlign:"center"}} circular size="large" color="teal">M </Label>  
    }   

{this.state.Tuesday === false ?

            <Label style={{ justifyContent: "center", textAlign:"center"}} circular size="large" color="white">T </Label>     
            :
            <Label style={{ justifyContent: "center", textAlign:"center"}} circular size="large" color="teal">T </Label>     

    }
    {this.state.Wednesday === false ?

            <Label style={{ justifyContent: "center", textAlign:"center"}} circular size="large" color="white">W </Label>     
:
<Label style={{ justifyContent: "center", textAlign:"center"}} circular size="large" color="teal">W </Label>}     
{this.state.Thursday === false ?
            <Label style={{ justifyContent: "center", textAlign:"center"}} circular size="large" color="white">T </Label>     
            :
            <Label style={{ justifyContent: "center", textAlign:"center"}} circular size="large" color="teal">T </Label>     
    }

{this.state.Friday === false ?
            <Label style={{ justifyContent: "center", textAlign:"center"}} circular size="large" color="white">F</Label>     
            :
            <Label style={{ justifyContent: "center", textAlign:"center"}} circular size="large" color="teal">F</Label>     
    }

{this.state.Saturday === false ?
     
            <Label style={{ justifyContent: "center", textAlign:"center"}} circular size="large" color="white">S</Label>     
     :
     <Label style={{ justifyContent: "center", textAlign:"center"}} circular size="large" color="teal">S</Label>     
    }

{this.state.Sunday === false ?

            <Label style={{ justifyContent: "center", textAlign:"center"}} circular size="large" color="white">S </Label>     
   :            <Label style={{ justifyContent: "center", textAlign:"center"}} circular size="large" color="teal">S </Label>     

        }
        
        </>
        )
    }
}



export default HabitDOW