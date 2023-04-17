import React, { Component } from 'react'
import { Button, Icon} from 'semantic-ui-react'

class Tuesday extends Component {

    state = {
        Tuesday: false,
        day: []
    }

    componentDidMount = () => {
        if (this.props.habit.day_of_weeks.find(d => d.name === "Tuesday")){
            let dow = this.props.habit.day_of_weeks.find(d => d.name === "Tuesday")
            this.setState({day: dow })
            if (dow.done) {
                this.setState({Tuesday: true })
            }
            else {
                this.setState({Tuesday: false })
            }        
        }
        else {
            this.setState({day: [] })
        }
    }

    handlePatchDOW = (event, id) => {
        event.preventDefault()
        this.setState({Tuesday: true })
        let t = id
        console.log(t)
        const token = localStorage.token;
        fetch(`http://localhost:3000/day_of_weeks/${t}`, {    
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                 Accept: 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                done: 1
            })
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.message) {
                window.alert(data.message)
            }
            else {
                window.alert("Marked as complete.")
            }
        })
    }    

    handleNotDoneDOW = (event, id) => {
        event.preventDefault()
        this.setState({Tuesday: false })
        let t = id
        const token = localStorage.token;
        fetch(`http://localhost:3000/day_of_weeks/${t}`, {    
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                 Accept: 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                done: 0
            })
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.message) {
                window.alert(data.message)
            }
            else {
                window.alert("Marked as incomplete.")
            }
        })
    } 
    
    render() {
        let dow = this.state.day
        return (
            <>
            {this.state.Tuesday === false ?
                <Button size="tiny"id="Tuesday" style={{backgroundColor: "#ffffff"}} onClick={(event) => {this.handlePatchDOW(event, dow.id)}} >
                    <Icon name="close" color="black" size="big"></Icon></Button>       
            :
                <Button size="tiny"  id="Tuesday" style={{backgroundColor: "#ffffff"}} onClick={(event) => {this.handleNotDoneDOW(event, dow.id)}} >
                    <Icon name="checkmark" color="teal" size="big"></Icon>
                </Button>
            }
            </> 
        )
    }
}

export default Tuesday