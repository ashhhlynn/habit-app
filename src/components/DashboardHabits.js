import React, { Component } from 'react'
import { Table, Grid, Segment } from 'semantic-ui-react'
import { connect } from "react-redux"
import { deleteHabit } from './actions/rootActions'
import DashboardHabitsDOW from './DashboardHabitsDOW'
import HabitMenu from './HabitMenu'
import { fetchHabits } from './actions/rootActions'
import { checkUser } from './actions/rootActions'

class DashboardHabits extends Component {

  render() {
    const productGroup = this.props.habits.map ( 
      i=> <DashboardHabitsDOW habit={i} key={i.id}/>
    )
      return (
        <div className="yourhabits">
          <Segment style={{height:"100%", fit:"cover", marginLeft:"-7%", marginRight:"-6.5%", marginTop:"-1.4%", opacity:"87%"}}>
            <Grid stackable columns={2} >
              <Grid.Column style={{width:"300px"}}> 
                <HabitMenu />
              </Grid.Column>
              <Grid.Column>
                <Table style={{textAlign:"center", marginLeft:"10%"}} className="dash" celled>
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
      fetchHabits: () =>  { dispatch(fetchHabits()) },
      checkUser: () =>  { dispatch(checkUser()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardHabits)