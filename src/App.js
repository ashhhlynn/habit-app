import './App.css';
import Landing from './components/Landing'
import ManageHabits from './components/ManageHabits'
import Habit from './components/Habit'
import CreateHabit from './components/CreateHabit'
import DashboardHabits from './components/DashboardHabits'
import EditHabitTwo from './components/EditHabitTwo'

import Navbar from './components/Navbar'
import { Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { React, Component }from "react"
import { checkUser } from "./components/actions/rootActions"
import { connect } from "react-redux"
import { fetchHabits } from './components/actions/rootActions'

class App extends Component {

  componentDidMount = () => {
    if (localStorage.token) {
      this.props.checkUser()
    }            
  }

  render() {
    return (
      <Router>
      <div className="App">   
      <Navbar/>
          <Container style={{marginTop:"0%"}}>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/habits" element={<ManageHabits />} />
            <Route exact path="/habit" element={<Habit />} />
            <Route exact path="/createhabit" element={<CreateHabit />} />
            <Route exact path="/yourhabits" element={<DashboardHabits />} />
            <Route exact path="/edithabit" element={<EditHabitTwo />} />

          </Routes>
      </Container>
    </div>
    </Router>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    checkUser: () =>  { dispatch(checkUser()) }, 
    fetchHabits: () =>  { dispatch(fetchHabits()) }
  }
}

export default connect(null, mapDispatchToProps)(App)

