import React, { Component } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import EditHabit from './EditHabit'

class Habit extends Component {
  
    constructor(props){  
        super(props);  
        this.state = {  
            modalOpenCp: false
        }  
    }
            
    handleEdit = () => {
    }

    handleDelete = () => {
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
            <Button circular size="tiny" color="teal">{i.name.charAt(0)}</Button>
            </>
            )
        }) 
        return (
            <>
                {dow}
                <Button color="teal" basic size="mini" onClick={this.handleOpenCp}>
                        <Icon name="pencil alternate"/> 
                </Button>
                <Button color="teal" basic size="mini">
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

export default Habit