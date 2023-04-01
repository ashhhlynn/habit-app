import Calendar from 'react-calendar'
import React, { Component } from 'react'
import { Icon, Segment, Header, Menu, Grid, Modal, Divider, Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class HabitMenu extends Component {

    handleLogout = (event) => {
        event.preventDefault()
        localStorage.clear()
    }    
    
    render() {
       
        return (
          <div>
                <Menu vertical style={{height:"100%"}}>
                    <Menu.Item><Link to="/yourhabits"><Icon name="calendar check"></Icon>Dashboard</Link></Menu.Item>
                    <Menu.Item><Link to="/habits"><Icon name="list"/>Manage Habits</Link></Menu.Item>
                    <Menu.Item><Link to="/createhabit"><Icon name="external alternate"></Icon>Add Habit</Link></Menu.Item>
                    <Menu.Item><Link to="/" onClick={(e) => {this.handleLogout(e)}}><Icon name="sign out alternate"></Icon>Logout</Link></Menu.Item>
                </Menu>
          </div>
        )
    }

}
export default HabitMenu