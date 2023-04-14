import React, { Component } from 'react'
import { Button, Icon, Modal, Label } from 'semantic-ui-react'
import EditHabit from './EditHabit'
import { checkUser, deleteHabit } from './actions/rootActions'
import { connect } from "react-redux"

class Habit extends Component {
  
    state = {  
        modalOpen: false,
        Monday: false,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: false,
        Saturday: false,
        Sunday: false,
    }  
    
    componentDidMount = () => { 
        if (this.props.habit.day_of_weeks.find(d => d.name === "Monday")) {
            this.setState ({
                Monday: true 
            })
        }
        if (this.props.habit.day_of_weeks.find(d => d.name === "Tuesday")) {
            this.setState ({
                Tuesday: true 
            })
        }
        if (this.props.habit.day_of_weeks.find(d => d.name === "Wednesday")) {
            this.setState ({
                Wednesday: true 
            })
        }
        if (this.props.habit.day_of_weeks.find(d => d.name === "Thursday")) {
            this.setState ({
                Thursday: true 
            })
        }
        if (this.props.habit.day_of_weeks.find(d => d.name === "Friday")) {
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
            
    handleDelete = () => {
        let id = this.props.habit.id
        this.props.deleteHabit(id)
    }           
    
    handleOpen = () => {
        this.setState({ modalOpen: true });
    }
        
    handleClose = () => { 
        this.setState({ modalOpen: false })
    }

    handleCreateDow = (event) => {
        const token = localStorage.token;
        let title = event.target.id
        return fetch('http://localhost:3000/day_of_weeks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization':  `Bearer ${token}`
            },
            body: JSON.stringify({
                habit_id: this.props.habit.id,
                name: title
            })
            })
            .then(resp => resp.json())
            .then(data => {
                if (data.message) {
                window.alert(data.message)
            }
               else {
                window.alert('Your day of week was added.')
                this.setState ({
                    [event.target.id]: true 
                })
               }
        }
    )
} 

    handleDeleteDow = (event) => {
        let x = this.props.habit.day_of_weeks.find(d => d.name === event.target.id)
        console.log(x)
        let id = x.id
        const token = localStorage.token;
        return fetch(`http://localhost:3000/day_of_weeks/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })   
        .then(
            window.alert("Your day of week was deleted."),
            this.setState ({
                [event.target.id]: false
            })
        )
    }

    render() {
        return (
            <>
            <Label.Group style={{marginTop: "-3%", textAlign:"right"}}> 
            {this.state.Monday === false ?
                <Button id="Monday" basic circular color="teal" onClick={this.handleCreateDow}>M</Button>
            :     
                <Button id="Monday" circular color="teal" onClick={this.handleDeleteDow}>M </Button> 
            }   
            {this.state.Tuesday === false ?
                <Button id="Tuesday" circular value="Tuesday" basic  color="teal" onClick={this.handleCreateDow}>T</Button>
            :
                <Button id="Tuesday" circular color="teal" onClick={this.handleDeleteDow}>T</Button>
            }
            {this.state.Wednesday === false ?
                <Button id="Wednesday" basic circular color="teal" onClick={this.handleCreateDow}>W</Button>
                :
                    <Button id="Wednesday"circular color="teal" onClick={this.handleDeleteDow}>W</Button>
            }     
            {this.state.Thursday === false ?
                <Button id="Thursday" basic circular color="teal" onClick={this.handleCreateDow} >T</Button>
                :
                    <Button id="Thursday"circular color="teal" onClick={this.handleDeleteDow} >T</Button>
            }
            {this.state.Friday === false ?
                            <Button id="Friday" basic circular color="teal" onClick={this.handleCreateDow} >F</Button>
                        : 
                            <Button id="Friday" circular color="teal" onClick={this.handleDeleteDow} >F</Button>}
                        {this.state.Saturday === false ?
                            <Button id="Saturday" basic circular color="teal" onClick={this.handleCreateDow} >S</Button>
                        :
                            <Button id="Saturday" circular color="teal" onClick={this.handleDeleteDow} >S</Button>}
                        {this.state.Sunday === false ?
                            <Button id="Sunday" basic circular color="teal" onClick={this.handleCreateDow}>S</Button>
                        :
                            <Button id="Sunday" circular color="teal" onClick={this.handleDeleteDow}>S</Button>
                        } 
            <Button color="teal" floated="right" style={{ textAlign:"center"}} basic size="tiny" onClick={this.handleOpen}><Icon style={{ textAlign:"center", marginLeft:"2%"}} name="pencil alternate"/></Button>
            <Button color="teal" floated="right" style={{ textAlign:"center"}} basic size="tiny" onClick={this.handleDelete}><Icon style={{ textAlign:"center", marginLeft:"3%"}} name="trash"></Icon></Button>
            </Label.Group>   
            <Modal 
                style={{width: "600px"}}
                open={this.state.modalOpen}
                onClose={this.handleClose}
                closeIcon
            >
                <Modal.Content>
                    <EditHabit habit={this.props.habit} handleClose={this.handleClose} />
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
      checkUser: () =>  { dispatch(checkUser()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Habit)