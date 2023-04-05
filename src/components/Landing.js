import React, { Component } from 'react'
import CurrentUser from './CurrentUser'
import YourHabits from './DashboardHabits'
import { Segment, Button, Modal } from 'semantic-ui-react'
import { checkUser } from "./actions/rootActions"
import { connect } from "react-redux"
import { fetchHabits } from './actions/rootActions'
import { Link } from 'react-router-dom'


class Landing extends Component {        


    state = {
        modalOpen: false
      }


      handleOpen = () => {
        this.setState({ modalOpen: true });
      }
    
      handleClose = () => {
        this.setState({ modalOpen: false })
      }

    componentDidMount = () => {

        this.props.checkUser()
    }
    render() {
        return (


<div>
<center><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<Segment style={{width:"500px"}}>
<h1 style={{marginTop: "3.5%", fontFamily:"segoe Script", fontSize:"44px"}}>Habitify</h1>
    
<Modal 
    open={this.state.modalOpen}
    onClose={this.handleClose}
    closeIcon>
    <Modal.Content>
      <CurrentUser handleClose={this.handleClose} />
    </Modal.Content>
  </Modal>
{!this.props.currentUser ?
<Button onClick={this.handleOpen} size="huge">GET STARTED</Button>

:
<Link to="/habits"><Button  style={{backgroundColor:"#FFFFFF"}} size="huge" >DASHBOARD</Button></Link>

}
</Segment>
</center>
</div>
          
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