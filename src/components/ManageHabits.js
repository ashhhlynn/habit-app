import React, { Component } from 'react'
import Habit from './Habit'
import { Segment, Header,  Grid, Item, Label, Button, Icon } from 'semantic-ui-react'
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

               <Header as="h3" style={{marginBottom:"-1.5%"}}>{i.title}
                    <Habit habit={i}/>

                </Header> 
                <i style={{marginTop:"0%"}}>{i.description} </i>

                <br></br>  
             
                <br></br><br></br>  

            </div>
            )
        })
        return (
            <div>                    <Segment style={{width:"100%", marginTop:"-4.5%", opacity:"92%"}}>

                <Grid stackable columns={2} >
                        <Grid.Column style={{width:"300px"}}> 
                            <HabitMenu />
                        </Grid.Column>
                        <Grid.Column>
                            <Item style={{marginLeft:"5%", width:"737px", paddingTop:"35px"}}>
                                {habitGroup}
                            </Item><br></br>
                        </Grid.Column> 
                </Grid>
           </Segment> </div>
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