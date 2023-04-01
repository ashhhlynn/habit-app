import React, { Component } from 'react'
import MyCalendar from './MyCalendar'
import CreateHabit from './CreateHabit'
import { Icon, Container, Menu, Grid, Divider} from 'semantic-ui-react'
import Navbar from './Navbar'
import { connect } from "react-redux"

import { Link } from 'react-router-dom'

class Sidebar extends Component {
       
    render() {
       
        return (
          
           <div>
<MyCalendar />



           </div>
        )
    
}

}
export default Sidebar