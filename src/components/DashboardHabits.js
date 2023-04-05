import React, { Component } from 'react'
import { Table, Grid } from 'semantic-ui-react'
import { connect } from "react-redux"
import { deleteHabit } from './actions/rootActions'
import DashboardHabitsDOW from './DashboardHabitsDOW'
import HabitMenu from './HabitMenu'
import Navbar from './Navbar'

class DashboardHabits extends Component {

  render() {
    const productGroup = this.props.habits.map ( 
      i=> <DashboardHabitsDOW habit={i} key={i.id}/>
    )
      return (
        <div className="yourhabits">
          <Navbar/>
          <Grid stackable columns={2} >
              <Grid.Column style={{width:"300px"}}> 
                <HabitMenu />
              </Grid.Column>
              <Grid.Column>
                <Table style={{textAlign:"center", marginLeft:"5%"}} className="dash" celled>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell style={{width:"200px"}}>Habit</Table.HeaderCell>
                      <Table.HeaderCell style={{width:"200px"}}>Monday</Table.HeaderCell>
                      <Table.HeaderCell style={{width:"200px"}}>Tuesday</Table.HeaderCell>
                      <Table.HeaderCell style={{width:"200px"}}>Wednesday</Table.HeaderCell>
                      <Table.HeaderCell style={{width:"200px"}}>Thursday</Table.HeaderCell>
                      <Table.HeaderCell style={{width:"200px"}}>Friday</Table.HeaderCell>
                      <Table.HeaderCell style={{width:"200px"}}>Saturday</Table.HeaderCell>
                      <Table.HeaderCell style={{width:"200px"}}>Sunday</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {productGroup}
                  </Table.Body>
                </Table><br></br>        
              </Grid.Column>
            </Grid>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
  return { 
      habits: state.habits
  }
}

const mapDispatchToProps = (dispatch) => {
    return { 
      deleteHabit: (habit) =>  { dispatch(deleteHabit(habit)) }, 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardHabits)