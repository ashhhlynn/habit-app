import React, { Component } from 'react'
import { Button, Segment, Table, Menu, Icon, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import { deleteHabit } from './actions/rootActions'
import YourHabitsDOW from './YourHabitsDOW'

import Navbar from './Navbar'

class YourHabits extends Component {
       
    constructor(props){  
        super(props);  
        this.state = {  
             habits: ["Water", "Food", "Journal"],
             h: []
          }  
        }

        componentDidMount = () => {
            fetch("http://localhost:3000/habits")
            .then(response => response.json())
            .then(habits => this.setState({h: habits}))
            console.log(this.state.h)
        }

        handleLogout = (event) => {
          event.preventDefault()
          localStorage.clear()

        }

    render() {
      const productGroup = this.state.h.map ( 
        i=> <YourHabitsDOW habit={i} key={i.id}/>
      )
      return (
        <div>
          <Navbar/>  
          <Grid stackable columns={2} >
              <Grid.Column style={{width:"300px"}}> 
              <Menu vertical style={{height:"100%"}}>
                <Menu.Item><Link to="/habits"><Icon name="calendar check"></Icon>Dashboard</Link></Menu.Item>
                <Menu.Item><Link to="/yourhabits"><Icon name="list"/>Manage Habits</Link></Menu.Item>
                <Menu.Item><Link to="/createhabit"><Icon name="external alternate"></Icon>Add Habit</Link></Menu.Item>
                <Menu.Item><Link to="/" onClick={(e) => {this.handleLogout(e)}} ><Icon name="sign out alternate"></Icon>Logout</Link></Menu.Item>
              </Menu>
              </Grid.Column>
              <Grid.Column>
                <Table celled columns={7}>
                  <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Habit</Table.HeaderCell>
                    <Table.HeaderCell>Monday</Table.HeaderCell>
                    <Table.HeaderCell>Tuesday</Table.HeaderCell>
                    <Table.HeaderCell>Wednesday</Table.HeaderCell>
                    <Table.HeaderCell>Thursday</Table.HeaderCell>
                    <Table.HeaderCell>Friday</Table.HeaderCell>
                    <Table.HeaderCell>Saturday</Table.HeaderCell>
                    <Table.HeaderCell>Sunday</Table.HeaderCell>
                  </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {productGroup}
                  </Table.Body>
                </Table>
             
              </Grid.Column>
            </Grid>
          </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
      deleteHabit: (habit) =>  { dispatch(deleteHabit(habit)) }, 
    }
}

export default connect(null, mapDispatchToProps)(YourHabits)