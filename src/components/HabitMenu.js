import React, { Component } from 'react'
import { Icon, Menu} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { logOut } from "./actions/rootActions"
import { connect } from "react-redux"

class HabitMenu extends Component {

    handleLogout = (event) => {
        event.preventDefault()
        localStorage.clear()
        this.props.logOut()
    }    
    
    render() {
        return (
          <div className="habitMenu">
                <Menu className="nav" vertical style={{height:"100%"}}>
                    <Menu.Item ><Link to="/yourhabits" style={{color:"#002A53"}}><Icon name="calendar check"></Icon>Dashboard</Link></Menu.Item>
                    <Menu.Item><Link to="/habits"  style={{color:"#002A53"}}><Icon name="list"/>Manage Habits</Link></Menu.Item>
                    <Menu.Item><Link to="/createhabit"  style={{color:"#002A53"}}><Icon name="external alternate"></Icon>Add Habit</Link></Menu.Item>
                    <Menu.Item><Link to="/" as="button" style={{color:"#002A53"}} onClick={(e) => {this.handleLogout(e)}}><Icon name="sign out alternate"></Icon>Logout</Link></Menu.Item>
                </Menu>
          </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
      logOut: () =>  { dispatch(logOut()) }, 
    }
}

export default connect(null, mapDispatchToProps)(HabitMenu)