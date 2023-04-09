import React, { Component } from 'react'
import Habit from './Habit'
import { Segment, Header,  Grid, Item } from 'semantic-ui-react'
import { connect } from "react-redux"
import HabitMenu from './HabitMenu'
import { checkUser } from './actions/rootActions'
import { fetchHabits } from './actions/rootActions'

class ManageHabits extends Component {
       
    componentDidMount = () => {
        this.props.checkUser()
    }

    render() {
        const habitGroup = this.props.habits.map( i => {
            return (
                <div style={{textAlign: "left"}}>
                    <Header as="h3" style={{marginBottom:"-1%"}}>
                        {i.title}
                        <Habit habit={i}/>
                    </Header> 
                    <i style={{marginTop:"0%"}}>{i.description} </i>
                    <br></br><br></br>  
                </div>
            )
        })
        return (
            <div>                    
                <Segment style={{height:"100%", minHeight:"515px", marginLeft:"-7%", marginRight:"-6.5%", marginTop:"-1.4%", opacity:"87%"}}>
                    <Grid stackable columns={2} >
                        <Grid.Column style={{width:"300px"}}> 
                            <HabitMenu />
                        </Grid.Column>
                        <Grid.Column>
                            <Item style={{marginLeft:"10%", marginTop:"4%", width:"850px"}}>
                                {habitGroup}
                            </Item>
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
      fetchHabits: () =>  { dispatch(fetchHabits()) },
      checkUser: () =>  { dispatch(checkUser()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageHabits)