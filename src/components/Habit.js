import React, { Component } from 'react'
import { Button, Icon, Modal, Label } from 'semantic-ui-react'
import EditHabit from './EditHabit'
import { deleteHabit } from './actions/rootActions'
import { connect } from "react-redux"

class Habit extends Component {
  
    constructor(props){  
        super(props);  
        this.state = {  
            modalOpenCp: false
        }  
    }
            
    handleDelete = () => {
        let id = this.props.habit.id
        const token = localStorage.token;
        return fetch(`http://localhost:3000/habits/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })   
        .then(
            window.alert("Thank you! Your habit was deleted."),
            this.props.deleteHabit(id)
        )
    }           
    
    handleOpenCp = () => {
        this.setState({ modalOpenCp: true });
    }
        
    handleCloseCp = () => {
        this.setState({ modalOpenCp: false })
    }

    render() {
        const dow = this.props.habit.day_of_weeks.map(i => {
            return (
            <>
            <Label style={{ justifyContent:"center", textAlign:"center"}} circular size="large" color="teal">{i.name.charAt(0)} </Label> 
            </>
            )
        }) 
        return (
            <>
                {dow} 
                <Button color="teal" basic size="mini" onClick={this.handleOpenCp}>
                        <Icon name="pencil alternate"/> 
                </Button>
                <Button color="teal" basic size="mini" onClick={this.handleDelete}>
                    <Icon name="trash"></Icon>
                </Button>
                <Modal 
                open={this.state.modalOpenCp}
                onClose={this.handleCloseCp}
                closeIcon>
                    <Modal.Content>
                        <EditHabit habit={this.props.habit} handleClose={this.handleCloseCp} />
                    </Modal.Content>
                </Modal>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      deleteHabit: (id) =>  { dispatch(deleteHabit(id)) }
    }
  }

export default connect(null, mapDispatchToProps)(Habit)