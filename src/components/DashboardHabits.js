import React, { Component } from 'react'
import { Table, Grid, Segment } from 'semantic-ui-react'
import { connect } from "react-redux"
import { deleteHabit } from './actions/rootActions'
import DashboardHabitsDOW from './DashboardHabitsDOW'
import HabitMenu from './HabitMenu'
import { checkUser } from './actions/rootActions'

class DashboardHabits extends Component {

  componentDidMount = () => {
    this.props.checkUser()
  }

  render() {
    const productGroup = this.props.habits.map ( 
      i=> <DashboardHabitsDOW habit={i} key={i.id}/>
    )
      return (
        <div className="yourhabits">
          <Segment style={{height:"100%", minHeight:"515px", marginLeft:"-7%", marginRight:"-6.5%", marginTop:"-1.4%", opacity:"87%"}}>
            <Grid stackable columns={2} >
              <Grid.Column style={{width:"300px"}}> 
                <HabitMenu />
              </Grid.Column>
              <Grid.Column>
                <Table size="large" columns={8} fixed style={{width:"852px", textAlign:"center", marginTop:"4%", marginLeft:"9%"}} className="dash" celled>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell >Habit</Table.HeaderCell>
                      <Table.HeaderCell>Monday</Table.HeaderCell>
                      <Table.HeaderCell >Tuesday</Table.HeaderCell>
                      <Table.HeaderCell >Wednesday</Table.HeaderCell>
                      <Table.HeaderCell >Thursday</Table.HeaderCell>
                      <Table.HeaderCell >Friday</Table.HeaderCell>
                      <Table.HeaderCell >Saturday</Table.HeaderCell>
                      <Table.HeaderCell >Sunday</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {productGroup}
                  </Table.Body>
                </Table>        
              </Grid.Column>
            </Grid>
          </Segment>
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
      checkUser: () =>  { dispatch(checkUser()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardHabits)