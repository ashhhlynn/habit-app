import React, { Component } from 'react'
import { Button, Segment, Table, Menu, Icon, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import { deleteHabit } from './actions/rootActions'
import YourHabitsDOW from './YourHabitsDOW'
import HabitMenu from './HabitMenu'

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

    render() {
      const productGroup = this.state.h.map ( 
        i=> <YourHabitsDOW habit={i} key={i.id}/>
      )
      return (
        <div className="yourhabits">
          <Grid stackable columns={2} >
              <Grid.Column style={{width:"300px"}}> 
                <HabitMenu />
              </Grid.Column>
              <Grid.Column>
                <Table celled  columns={7}>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell style={{width:"200px"}}>Habit</Table.HeaderCell>
                      <Table.HeaderCell style={{width:"200px"}}>Monday</Table.HeaderCell>
                      <Table.HeaderCell style={{width:"200px"}}>Tuesday</Table.HeaderCell>
                      <Table.HeaderCell style={{width:"200px"}}>Wednesday</Table.HeaderCell>
                      <Table.HeaderCell style={{width:"250px"}}>Thursday</Table.HeaderCell>
                      <Table.HeaderCell style={{width:"250px"}}>Friday</Table.HeaderCell>
                      <Table.HeaderCell style={{width:"250px"}}>Saturday</Table.HeaderCell>
                      <Table.HeaderCell style={{width:"250px"}}>Sunday</Table.HeaderCell>
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