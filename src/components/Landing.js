import React, { Component } from 'react'
import CurrentUser from './CurrentUser'
import { Button, Modal } from 'semantic-ui-react'
import { checkUser } from "./actions/rootActions"
import { connect } from "react-redux"
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
  
    render() {
        return (
            <div>
                <center>
                    <br></br><br></br>
                    <img style={{width:"285px", marginTop: "1%", height:"300px"}} src="https://cdn3.iconfinder.com/data/icons/man-poses/512/running_man-512.png" alt="welcome"/>
                    <br></br>
                    {this.props.currentUser.length === 0 ?
                        <>
                        <Button onClick={this.handleOpen} circular style={{fontWeight:"normal", backgroundColor:"white", color:"grey"}}  color="black" inverted size="massive">GET STARTED</Button>
                        <Modal style={{width:"500px"}}
                            open={this.state.modalOpen}
                            onClose={this.handleClose}
                            closeIcon
                        >
                            <Modal.Content>
                                <CurrentUser handleClose={this.handleClose} />
                            </Modal.Content>
                        </Modal>
                        </>
                    :
                        <Link to="/habits">
                            <Button inverted circular style={{backgroundColor:"#FFFFFF", color: "grey", fontWeight:"normal"}}color="black" size="massive">TRACK HABITS</Button>
                        </Link>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)