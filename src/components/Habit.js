import React, { Component } from 'react'
import { Button, Icon, Modal, Label } from 'semantic-ui-react'
import EditHabit from './EditHabit'
import { checkUser, deleteHabit } from './actions/rootActions'
import { connect } from "react-redux"

class Habit extends Component {
  
    constructor(props){  
        super(props);  
        this.state = {  
            modalOpenCp: false,
            Monday: false,
            Tuesday: false,
            Wednesday: false,
            Thursday: false,
            Friday: false,
            Saturday: false,
            Sunday: false,
        }  
    }

    checkDays = () => { 
        if (this.props.habit.day_of_weeks.find(d => d.name === "Monday")){
            this.setState ({
                Monday: true 
            })
        }
        if (this.props.habit.day_of_weeks.find(d => d.name === "Tuesday")){
            this.setState ({
                Tuesday: true 
            })
        }
        if (this.props.habit.day_of_weeks.find(d => d.name === "Wednesday")){
            this.setState ({
                Wednesday: true 
            })
        }
        if (this.props.habit.day_of_weeks.find(d => d.name === "Thursday")){
            this.setState ({
                Thursday: true 
            })
        }
        if (this.props.habit.day_of_weeks.find(d => d.name === "Friday")){
            this.setState ({
                Friday: true 
            })
        }           
        if (this.props.habit.day_of_weeks.find(d => d.name === "Saturday")){
            this.setState ({
                Saturday: true 
            })
        }           
        if (this.props.habit.day_of_weeks.find(d => d.name === "Sunday")){
            this.setState ({
                Sunday: true 
            })
        }    
    }
            
    componentDidMount = () => {
       this.checkDays()
    }

    handleDelete = () => {
        let id = this.props.habit.id
        this.props.deleteHabit(id)
    }           
    
    handleOpenCp = () => {
        this.setState({ modalOpenCp: true });
    }
        
    handleCloseCp = () => {
        this.checkDays()
        this.setState({ modalOpenCp: false })
    }

    render() {
        return (
            <>
            <Label.Group style={{marginTop: "-3%", textAlign:"right"}}> 
            {this.state.Monday === false ?
                <Label style={{ justifyContent: "center", textAlign:"center"}} circular size="large" color="white">M </Label>
            :     
                <Label style={{ justifyContent: "center", textAlign:"center"}} circular size="large" color="teal">M </Label>  
            }   
            {this.state.Tuesday === false ?
                <Label style={{ justifyContent: "center", textAlign:"center"}} circular size="large" color="white">T </Label>     
            :
                <Label style={{ justifyContent: "center", textAlign:"center"}} circular size="large" color="teal">T </Label>     
            }
            {this.state.Wednesday === false ?
                <Label style={{ justifyContent: "center", textAlign:"center"}} circular size="large" color="white">W </Label>     
            :
                <Label style={{ justifyContent: "center", textAlign:"center"}} circular size="large" color="teal">W </Label>}     
            {this.state.Thursday === false ?
                <Label style={{ justifyContent: "center", textAlign:"center"}} circular size="large" color="white">T </Label>     
            :
                <Label style={{ justifyContent: "center", textAlign:"center"}} circular size="large" color="teal">T </Label>     
            }
            {this.state.Friday === false ?
                <Label style={{ justifyContent: "center", textAlign:"center"}} circular size="large" color="white">F</Label>     
            :
                <Label style={{ justifyContent: "center", textAlign:"center"}} circular size="large" color="teal">F</Label>     
            }
            {this.state.Saturday === false ?
                <Label style={{ justifyContent: "center", textAlign:"center"}} circular size="large" color="white">S</Label>     
            :
                <Label style={{ justifyContent: "center", textAlign:"center"}} circular size="large" color="teal">S</Label>     
            }
            {this.state.Sunday === false ?
                <Label style={{ justifyContent: "center", textAlign:"center"}} circular size="large" color="white">S </Label>     
            :            
                <Label style={{ justifyContent: "center", textAlign:"center"}} circular size="large" color="teal">S </Label>     
            }
            <Button color="teal" floated="right" style={{ justifyContent: "center", textAlign:"center"}} basic size="tiny" onClick={this.handleOpenCp}>  <Icon style={{ textAlign:"center", marginLeft:"2%"}} name="pencil alternate"/></Button>
            <Button color="teal" floated="right" style={{ textAlign:"center"}} basic size="tiny" onClick={this.handleDelete}>  <Icon style={{ textAlign:"center", marginLeft:"3%"}} name="trash"></Icon></Button>
            </Label.Group>   
            <Modal 
                style={{width: "600px"}}
                open={this.state.modalOpenCp}
                onClose={this.handleCloseCp}
                closeIcon
            >
                <Modal.Content>
                    <EditHabit habit={this.props.habit} handleClose={this.handleCloseCp} />
                </Modal.Content>
            </Modal>
        </>
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
      deleteHabit: (id) =>  { dispatch(deleteHabit(id)) },
      checkUser: () =>  { dispatch(checkUser()) }, 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Habit)