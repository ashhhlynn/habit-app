import React, { Component } from 'react'
import { Form, Grid, Button, Segment} from 'semantic-ui-react'
import { createHabit } from './actions/rootActions'
import HabitMenu from './HabitMenu'
import { connect } from "react-redux"

class CreateHabit extends Component {
    
    state = {
        title: '',
        description: '',
        startday:'',
        dayz: []
    }

    handleChange = (event) => {
        this.setState ({
        [event.target.id]: event.target.value
        })
    }

    handleDOW = (event) => {
        event.preventDefault()
        console.log(event.target.id)
        this.state.dayz.push(event.target.id)
        console.log(this.state.dayz)
    }

    handleSubmit = (event, habit) => {
        event.preventDefault()
        console.log(habit)
        const token = localStorage.token;
        let d = habit.dayz
        console.log(d)
                return fetch('http://localhost:3000/habits', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization':  `Bearer ${token}`
                },
                body: JSON.stringify({
                   title: habit.title,
                   description: habit.description,
                    day_of_weeks: habit.dayz
                })
                })
                .then(resp => resp.json())
                .then(data => {
                    if (data.message) {
                    window.alert(data.message)
                }
                   else {
                    window.alert('Thank you! Your product was created!')
                    this.props.createHabit(data)
                   }
            }
        )
    } 

    render() {
        return (
            <div>            
            <Grid stackable columns={2} >
            <Grid.Column style={{width:"300px"}}> 
                <HabitMenu/>
            </Grid.Column>
            <Grid.Column>
                <Segment style={{marginLeft: "9%", width:"700px"}}>
                    <h2>Create Habit</h2>
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
                    type="text"
                    id="startday"
                    placeholder="start day"
                    value={this.state.startday} 
                    onChange={this.handleChange}
                    />                   
                    <Button id="Monday" basic circular color="teal" onClick={this.handleDOW}>M</Button>
                    <Button id="Tuesday" basic circular color="teal" onClick={this.handleDOW}>T</Button>
                    <Button id="Wednesday" basic circular color="teal" onClick={this.handleDOW}>W</Button>
                    <Button id="Thursday" basic circular color="teal" onClick={this.handleDOW} >TR</Button>
                    <Button id="Friday" basic circular color="teal" onClick={this.handleDOW} >F</Button>
                    <Button id="Saturday" basic circular color="teal" onClick={this.handleDOW} >SA</Button>
                    <Button id="Sunday" basic circular color="teal" onClick={this.handleDOW}>S</Button><br></br><br></br>
                   <Form.Button inverted style={{width:"250px", color:"white", backgroundColor:"#585858"}}className="formButtons" content='Submit'/>        
                </Form></Segment>           
            </Grid.Column>
            </Grid>
        </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
      createHabit: (habit) =>  { dispatch(createHabit(habit)) }, 
    }
}

export default connect(null, mapDispatchToProps)(CreateHabit)