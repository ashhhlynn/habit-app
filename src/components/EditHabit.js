import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
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
                user_id: this.props.currentUser.id
              })
          })
          .then(resp => resp.json())
          .then(data => {
              if (data.message) {
                  window.alert(data.message)
              }
              else {
                  window.alert("Your habit was updated.")
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
    checkUser: () =>  { dispatch(checkUser()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditHabit)