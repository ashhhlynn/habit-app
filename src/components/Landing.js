import React, { Component } from 'react'
import CurrentUser from './CurrentUser'
import YourHabits from './DashboardHabits'
import { Segment } from 'semantic-ui-react'
import { checkUser } from "./actions/rootActions"
import { connect } from "react-redux"
import { fetchHabits } from './actions/rootActions'

class Landing extends Component {        

    render() {
        return (
            !this.props.currentUser ?
                <div className="landingpg">
                    <center>
                        <Segment style={{width:"700px"}}>
                            <CurrentUser/>
                        </Segment>
                    </center> 
               </div> 
           :
                <YourHabits/>
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
      checkUser: (data) =>  { dispatch(checkUser(data)) }, 
      fetchHabits: () =>  { dispatch(fetchHabits()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)