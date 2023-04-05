import React, { Component } from 'react'
import CurrentUser from './CurrentUser'
import YourHabits from './DashboardHabits'
import { Segment, Icon, Button, Modal } from 'semantic-ui-react'
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
<center>
    
<Modal 
    open={this.state.modalOpen}
    onClose={this.handleClose}
    closeIcon>
    <Modal.Content>
      <CurrentUser handleClose={this.handleClose} />
    </Modal.Content>
  </Modal>
<img style={{width:"280px", height:"300px"}} src="https://cdn3.iconfinder.com/data/icons/man-poses/512/running_man-512.png"/>


<br></br>{!this.props.currentUser ?
<Button onClick={this.handleOpen} circular style={{backgroundColor:"white", color:"grey"}}  color="black" inverted size="massive">START</Button>

:
<Link to="/habits"><Button  circular style={{backgroundColor:"#FFFFFF"}} size="massive" >TRACK HABITS</Button></Link>

}
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