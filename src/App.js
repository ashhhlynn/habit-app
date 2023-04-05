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
import { fetchHabits } from './components/actions/rootActions'

class App extends Component {

  componentDidMount = () => {
    this.props.fetchHabits()
    if (localStorage.token){
  
    const token = localStorage.token;
    console.log(token)
    return fetch('http://localhost:3000/profile', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${token}`
    },
    })
    .then(resp => resp.json())
    .then(data => {
        if (data.message) {
            localStorage.removeItem("token")
        }
        else {
            this.setState({currentUser: data.user})
            console.log(data.user)
            this.props.checkUser(data.user)
        }            
    })
  }
}

  render() {
    return (
      <Router>
      <div className="App">   
      <Navbar/>
          <Container style={{marginLeft:"4%", marginRight:"4%", marginTop:"4%"}}>
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
  );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    checkUser: (data) =>  { dispatch(checkUser(data)) }, 
    fetchHabits: () =>  { dispatch(fetchHabits()) }
  }
}

export default connect(null, mapDispatchToProps)(App)

