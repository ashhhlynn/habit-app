import './App.css';
import Landing from './components/Landing'
import ManageHabits from './components/ManageHabits'
import Habit from './components/Habit'
import CreateHabit from './components/CreateHabit'
import DashboardHabits from './components/DashboardHabits'
import Navbar from './components/Navbar'
import { Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">   
      <Navbar />
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

export default App;
