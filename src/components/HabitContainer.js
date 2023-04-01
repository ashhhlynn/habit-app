import React, { Component } from 'react'
import Habit from './Habit'
import EditHabit from './EditHabit'
import { Icon, Segment, Header,  Grid, Modal, Button} from 'semantic-ui-react'
import { connect } from "react-redux"
import HabitMenu from './HabitMenu'
import { Link } from 'react-router-dom'
import { fetchHabits } from './actions/rootActions'

class HabitContainer extends Component {
       
    constructor(props){  
        super(props);  
        this.state = {  
             h: [],
        }  
    }
        


    render() {
        const habitGroup = this.props.habits.map( i => {
            return (
            <div>
               <Header as="h3" style={{marginBottom:".5%"}}>{i.title}</Header> 
                <i>{i.description} </i>
                <br></br>  
                <Habit habit={i}/> 
                <br></br><br></br>       
            </div>
            )
        })
        return (
            <div>
                <Grid stackable columns={2} >
                        <Grid.Column style={{width:"300px"}}> 
                            <HabitMenu />
                        </Grid.Column>
                        <Grid.Column>
                            <Segment style={{width:"700px"}}>
                                {habitGroup}
                            </Segment>
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
      fetchHabits: () =>  { dispatch(fetchHabits()) }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(HabitContainer)