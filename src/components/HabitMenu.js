import React, { Component } from 'react'
import { Icon, Menu} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { logOut } from "./actions/rootActions"
import { connect } from "react-redux"

class HabitMenu extends Component {

    handleLogout = () => {
        localStorage.clear()
        this.props.logOut()
    }    
    
    render() {
        return (
            <div className="habitMenu">
                <Menu className="nav" size="huge" vertical style={{minHeight:"515px", marginTop:"-5%", marginLeft:"-4%", marginBottom:"-5%", height:"100%"}}>
                    <Menu.Item ><Link to="/yourhabits" style={{color:"#585858"}}><Icon name="calendar check"></Icon>Dashboard</Link></Menu.Item>
                    <Menu.Item><Link to="/habits"  style={{color:"#585858 "}}><Icon name="list"/>Manage Habits</Link></Menu.Item>
                    <Menu.Item><Link to="/createhabit"  style={{color:"#585858 "}}><Icon name="external alternate"></Icon>Add Habit</Link></Menu.Item>
                    <Menu.Item><Link to="/" style={{color:"#585858 "}} onClick={this.handleLogout}><Icon name="sign out alternate"></Icon>Logout</Link></Menu.Item>
                    <Menu.Item></Menu.Item>
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