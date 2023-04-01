import React, { Component } from 'react'
import { Form, Menu, Icon, Button } from 'semantic-ui-react'
import { editHabit } from './actions/rootActions'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { connect } from "react-redux"

class EditHabit extends Component {
    

    constructor(props){
        super(props)
          this.state = {
            title: this.props.habit.title,
            description: this.props.habit.description,
           days: this.props.habit.days,
            id: this.props.habit.id,
            startday: this.props.habit.startday
          }
        }
        

    handleChange = (event) => {
        this.setState ({
        [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event, habit) => {
        event.preventDefault()
    
          const token = localStorage.token;
          console.log(token)
          let id = habit.id
          fetch(`http://localhost:3000/habits/${id}`, {  
              method: 'PATCH',
              headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json',
                  'Authorization': `Bearer ${token}`
              },
              body: JSON.stringify({
                title: habit.title,
                description: habit.description,
              })
          })
          .then(resp => resp.json())
          .then(data => {
              if (data.message) {
                  window.alert(data.message)
              }
              else {
                  console.log(data)
                  window.alert("Thank you! Your product was updated.")
              }
          })
        }
    

    render() {
        return (

           

            <div className="createProductForm"> <center>
                <h2>Edit Habit</h2>
                <Form onSubmit= { (event) => {this.handleSubmit(event, this.state)}}>
                    <Form.Input
                    required
                    type="text"
                    id="title"
                    placeholder="Title"
                    value={this.state.title} 
                    onChange={this.handleChange}
                    />
                    <Form.TextArea
                    required
                    type="text"
                    id="description"
                    placeholder="Description"
                    value={this.state.description} 
                    onChange={this.handleChange}
                    />
                    <Form.Input
                    required
                    type="text"
                    id="startday"
                    placeholder="start day"
                    value={this.state.startday} 
                    onChange={this.handleChange}
                    />
                        {
                        this.props.habit.day_of_weeks.find(hd => hd.name === "Monday") ?  
                      <Button circular color="teal">M</Button>
                    :
                    <Button circular color="teal" basic>M</Button>

                    }


                  {
                        this.props.habit.day_of_weeks.find(hd => hd.name === "Tuesday") ?  
                      <Button circular color="teal">F</Button>
                    :
                    <Button circular color="teal" basic>F</Button>
                    }

                    {
                        this.props.habit.day_of_weeks.find(hd => hd.name === "Wednesday") ?  
                      <Button circular color="teal">W</Button>
                    :
                    <Button circular color="teal" basic>W</Button>
                    }

                      {
                        this.props.habit.day_of_weeks.find(hd => hd.name === "Thursday") ?  
                      <Button circular color="teal">TR</Button>
                    :
                    <Button circular color="teal" basic>TR</Button>
                    }

                    {
                        this.props.habit.day_of_weeks.find(hd => hd.name === "Friday") ?  
                      <Button circular color="teal">F</Button>
                    :
                    <Button circular color="teal" basic>F</Button>
                    }
                        {
                        this.props.habit.day_of_weeks.find(hd => hd.name === "Saturday") ?  
                      <Button circular color="teal">SA</Button>
                    :
                    <Button circular color="teal" basic>SA</Button>
                    }

{
                        this.props.habit.day_of_weeks.find(hd => hd.name === "Sunday") ?  
                      <Button circular color="teal">S</Button>
                    :
                    <Button circular color="teal" basic>S</Button>
                    }
<br></br><br></br>
                    <Link to='/habits'><Form.Button className="formButtons" content='Submit'/>  </Link>        
                </Form></center>
            </div>
          
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return { 
      editHabit: (habit) =>  { dispatch(editHabit(habit)) }, 
    }
  }

export default connect(null, mapDispatchToProps)(EditHabit)