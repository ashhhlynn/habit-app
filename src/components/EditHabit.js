import React, { Component } from 'react'
import { Form,  Button } from 'semantic-ui-react'
import { patchHabit } from './actions/rootActions'
import { connect } from "react-redux"
import { checkUser } from "./actions/rootActions"

class EditHabit extends Component {
    
  constructor(props){
    super(props)
      this.state = {
        title: this.props.habit.title,
        description: this.props.habit.description,
        days: this.props.habit.days,
        id: this.props.habit.id,
        habitDays: [],
        Monday: false,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: false,
        Saturday: false,
        Sunday: false,
    }
  }

  componentDidMount = () => {
    let dows= this.props.habit.day_of_weeks
    console.log(dows)
    for (let i = 0; i < dows.length; i++) {
      this.state.habitDays.push(dows[i].name)
    }
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
        
  handleChange = (event) => {
    this.setState ({
      [event.target.id]: event.target.value
    })
  }

  handleDOW = (event) => {
    event.preventDefault()
    console.log(event.target.id)
    this.state.habitDays.push(event.target.id)
    console.log(this.state.habitDays)
    this.setState({
      [event.target.id]: true 
    })
  }

  handleDOWNo = (event) => {
    event.preventDefault()
    let o = this.state.habitDays.find(k => k === event.target.id)
    console.log(o)
    let newHd =   this.state.habitDays.filter(h => h !== event.target.id)
    this.setState({
      [event.target.id]: false,
      habitDays: newHd
    })
    console.log(this.state.habitDays)
  }

  handleSubmit = (event, habit) => {
    event.preventDefault()
    const token = localStorage.token;
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
                day_of_weeks: habit.habitDays,
                description: habit.description,
                user_id: this.props.currentUser.id
              })
          })
          .then(resp => resp.json())
          .then(data => {
              if (data.message) {
                  window.alert(data.message)
              }
              else {
                  window.alert("Thank you! Your habit was updated.")
                  this.props.patchHabit(data)
                  this.props.handleClose();
              }
        }
      )
    }   

    render() {
        return (
          <div className="createProductForm"> 
            <center>
              <h2 style={{fontWeight:"normal"}}>Edit Habit</h2>
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
                  {this.state.Monday === false ?
                    <Button id="Monday" basic circular color="teal" onClick={this.handleDOW}>M</Button>
                  :
                    <Button id="Monday" circular color="teal" onClick={this.handleDOWNo}>M</Button>
                  }
                  {this.state.Tuesday === false ?
                    <Button id="Tuesday" value="Tuesday" basic circular color="teal" onClick={this.handleDOW}>T</Button>
                  :
                    <Button id="Tuesday" circular color="teal" onClick={this.handleDOWNo}>T</Button>
                  }
                  {this.state.Wednesday === false ?
                    <Button id="Wednesday" basic circular color="teal" onClick={this.handleDOW}>W</Button>
                  :
                    <Button id="Wednesday"circular color="teal" onClick={this.handleDOWNo}>W</Button>}
                  {this.state.Thursday === false ?
                    <Button id="Thursday" basic circular color="teal" onClick={this.handleDOW} >T</Button>
                    :
                    <Button id="Thursday"circular color="teal" onClick={this.handleDOWNo} >T</Button>}
                  {this.state.Friday === false ?
                    <Button id="Friday" basic circular color="teal" onClick={this.handleDOW} >F</Button>
                    : 
                    <Button id="Friday" circular color="teal" onClick={this.handleDOWNo} >F</Button>}
                  {this.state.Saturday === false ?
                    <Button id="Saturday" basic circular color="teal" onClick={this.handleDOW} >S</Button>
                  :
                    <Button id="Saturday" circular color="teal" onClick={this.handleDOWNo} >S</Button>}
                  {this.state.Sunday === false ?
                    <Button id="Sunday" basic circular color="teal" onClick={this.handleDOW}>S</Button>
                  :
                  <Button id="Sunday" circular color="teal" onClick={this.handleDOWNo}>S</Button>
                  } 
                  <br></br><br></br>
                <Form.Button className="formButtons" inverted style={{width:"250px", fontWeight:"normal", color:"white", backgroundColor:"#585858"}} content='SAVE HABIT'/>       
              </Form>
            </center>
          </div>
        )
  }
}

const mapStateToProps = (state) => {
  return { 
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    patchHabit: (habit) =>  { dispatch(patchHabit(habit)) }, 
    checkUser: () =>  { dispatch(checkUser()) }, 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditHabit)