import logo from './logo.svg';
import './App.css';
import MyCalendar from './components/MyCalendar'
import CurrentUser from './components/CurrentUser'
import Login from './components/Login'
import Landing from './components/Landing'

import HabitContainer from './components/HabitContainer'
import Habit from './components/Habit'
import CreateHabit from './components/CreateHabit'
import YourHabits from './components/YourHabits'
import Navbar from './components/Navbar'

import { Container, Menu, Header } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
    <div className="App">   
  
    <Container style={{marginLeft:"4%", marginRight:"4%", marginTop:"4%"}}>
 
      <Routes>
      <Route exact path="/" element={<Landing />} />

      <Route exact path="/habits" element={<HabitContainer />} />
      <Route exact path="/habit" element={<Habit />} />
      <Route exact path="/createhabit" element={<CreateHabit />} />
      <Route exact path="/yourhabits" element={<YourHabits />} />

      </Routes>
      </Container>
   
    </div></Router>
  );
}

export default App;
