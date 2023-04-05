import React, { Component } from 'react'
import CurrentUser from './CurrentUser'
import YourHabits from './DashboardHabits'
import { Segment, Button } from 'semantic-ui-react'
import { checkUser } from "./actions/rootActions"
import { connect } from "react-redux"
import { fetchHabits } from './actions/rootActions'
import { Link } from 'react-router-dom'


class Landing extends Component {        


    componentDidMount = () => {

        this.props.checkUser()
    }
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
           <center><Segment style={{width:"700px"}}>
                    <h1>Welcome, {this.props.currentUser.name}!</h1> 
                    <Link to="/habits"><Button>GET STARTED</Button></Link>
                    </Segment> </center> 
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