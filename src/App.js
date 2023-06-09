import './App.css';
import Landing from './components/Landing'
import ManageHabits from './components/ManageHabits'
import Habit from './components/Habit'
import CreateHabit from './components/CreateHabit'
import DashboardHabits from './components/DashboardHabits'
import Navbar from './components/Navbar'
import { Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { React, Component }from "react"
import { checkUser } from "./components/actions/rootActions"
import { connect } from "react-redux"

class App extends Component {

  componentDidMount = () => {
    window.alert("Backend deployment still processing. Visit https://github.com/ashhhlynn/habit-app-back for instructions on accessing database!")
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
            </Routes>
          </Container>
        </div>
      </Router>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    checkUser: () =>  { dispatch(checkUser()) }
  }
}

export default connect(null, mapDispatchToProps)(App)

