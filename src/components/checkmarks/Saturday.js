import React, { Component } from 'react'
import {  Button, Icon} from 'semantic-ui-react'

class Saturday extends Component {

    state = {
        Saturday: false,
        day: []
    }

    componentDidMount = () => {
        if (this.props.habit.day_of_weeks.find(d => d.name === "Saturday")){
            let dow = this.props.habit.day_of_weeks.find(d => d.name === "Saturday")
            if (dow.done) {
                this.setState({Saturday: true })}
            else {
                this.setState({Saturday: false })
            }        
        }
    }

    handlePatchDOW = (event, id) => {
        event.preventDefault()
        let t = id
        console.log(t)
        this.setState({Saturday: true })
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
            })})
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
        this.setState({Saturday: false })
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
            })})
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
        let dow = this.props.habit.day_of_weeks.find(hd => hd.name === "Saturday")
        return (
            <>
            {this.state.Saturday === false ?
                <Button size="tiny"id="Saturday" style={{backgroundColor: "#ffffff"}} onClick={(event) => {this.handlePatchDOW(event, dow.id)}} >
                    <Icon name="close" color="black" size="big"></Icon></Button>       
            :
                <Button size="tiny"  id="Saturday" style={{backgroundColor: "#ffffff"}} onClick={(event) => {this.handleNotDoneDOW(event, dow.id)}} >
                    <Icon name="checkmark" color="teal" size="big"></Icon>
                </Button>
            }
            </> 
        )
    }
}

export default Saturday