import React, { Component } from 'react'
import { Form, Grid, Button,  Segment} from 'semantic-ui-react'
import { createHabit } from './actions/rootActions'
import HabitMenu from './HabitMenu'
import { connect } from "react-redux"

class CreateHabit extends Component {
    
    state = {
        title: '',
        description: '',
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
        this.state.habitDays.push(event.target.id)
        this.setState ({
            [event.target.id]: true 
        })
    }
    
    handleDOWNo = (event) => {
        event.preventDefault()
        let newHd = this.state.habitDays.filter(h => h !== event.target.id)
        this.setState ({
            [event.target.id]: false,
            habitDays: newHd
        })
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
                    window.alert('Your habit was created.')
                    this.props.createHabit(data)
                   }
            }
        )
    } 

    render() {
        return ( 
            <Segment style={{height:"100%", marginLeft:"-7%", minHeight:"515px", marginRight:"-6.5%", marginTop:"-1.4%", opacity:"87%"}}>
                <Grid stackable columns={2} >
                <Grid.Column style={{width:"300px"}}> 
                    <HabitMenu/>
                </Grid.Column>
                <Grid.Column>
                    <Segment style={{marginLeft:"28%", marginTop:"5%", width:"615px"}}>
                        <h2 style={{fontWeight:"normal", marginTop:"1.5%"}}>Create Habit</h2>
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
                            <Button id="Tuesday" circular value="Tuesday" basic  color="teal" onClick={this.handleDOW}>T</Button>
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
                        <Form.Button inverted style={{width:"250px", fontWeight:"normal", color:"white", backgroundColor:"#585858"}}className="formButtons" content='SAVE HABIT'/>        
                        </Form><br></br>
                    </Segment>           
                </Grid.Column>
                </Grid>
            </Segment>
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