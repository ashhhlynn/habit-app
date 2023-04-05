import React, { Component } from 'react'
import { Form, Grid, Button, Checkbox, Segment} from 'semantic-ui-react'
import { createHabit } from './actions/rootActions'
import HabitMenu from './HabitMenu'
import { connect } from "react-redux"
import Navbar from './Navbar'
import CreateHabitButtons from './CreateHabitButtons'

class CreateHabit extends Component {
    
    state = {
        title: '',
        description: '',
        startday:'',
        habitDays: [],
        Monday: false,
Tuesday: false,
Wednesday: false,
Thursday: false,
Friday: false,
Saturday: false,
Sunday: false,
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
        [event.target.id]: true })
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
        console.log(habit)
        const token = localStorage.token;
        let d = habit.habitDays
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
                    day_of_weeks: habit.habitDays,
                    user_id: this.props.currentUser.id
                })
                })
                .then(resp => resp.json())
                .then(data => {
                    if (data.message) {
                    window.alert(data.message)
                }
                   else {
                    window.alert('Thank you! Your habit was created!')
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
                <Segment style={{marginLeft:"5%", width:"737px"}}>
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
                    <Button id="Thursday" basic circular color="teal" onClick={this.handleDOW} >TR</Button>
            :
<Button id="Thursday"circular color="teal" onClick={this.handleDOWNo} >TR</Button>}

{this.state.Friday === false ?
                    <Button id="Friday" basic circular color="teal" onClick={this.handleDOW} >F</Button>
                    : 
                    <Button id="Friday" circular color="teal" onClick={this.handleDOWNo} >F</Button>}
{this.state.Saturday === false ?

                    <Button id="Saturday" basic circular color="teal" onClick={this.handleDOW} >SA</Button>
                    :
                    <Button id="Saturday" circular color="teal" onClick={this.handleDOWNo} >SA</Button>}
{this.state.Sunday === false ?
                    <Button id="Sunday" basic circular color="teal" onClick={this.handleDOW}>S</Button>
                   :
                   <Button id="Sunday" circular color="teal" onClick={this.handleDOWNo}>S</Button>
} 
                   <br></br><br></br>
    
                   <Form.Button inverted style={{width:"250px", color:"white", backgroundColor:"#585858"}}className="formButtons" content='Submit'/>        
               


         
                </Form></Segment>           
            </Grid.Column>
            </Grid>
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
      createHabit: (habit) =>  { dispatch(createHabit(habit)) }, 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateHabit)