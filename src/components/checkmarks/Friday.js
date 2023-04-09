import React, { Component } from 'react'
import {  Button, Icon} from 'semantic-ui-react'

class Friday extends Component {

    state = {
        Friday: false,
        day: []
    }

    componentDidMount = () => {
        if (this.props.habit.day_of_weeks.find(d => d.name === "Friday")){
            let dow = this.props.habit.day_of_weeks.find(d => d.name === "Friday")
            if (dow.done) {
                this.setState({Fridayy: true })}
            else {
                this.setState({Friday: false })
            }        
        }
    }

    handlePatchDOW = (event, id) => {
        event.preventDefault()
        let t = id
        console.log(t)
        this.setState({Friday: true })
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
        this.setState({Friday: false })
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
                console.log(data)
            }
        })
    } 
    
    render() {
        let dow = this.props.habit.day_of_weeks.find(hd => hd.name === "Friday")
        return (
            <>
            {this.state.Friday === false ?
                <Button size="tiny"id="Friday" style={{backgroundColor: "#ffffff"}} onClick={(event) => {this.handlePatchDOW(event, dow.id)}} >
                    <Icon name="close" color="black" size="big"></Icon></Button>       
            :
                <Button size="tiny"  id="Friday" style={{backgroundColor: "#ffffff"}} onClick={(event) => {this.handleNotDoneDOW(event, dow.id)}} >
                    <Icon name="checkmark" color="teal" size="big"></Icon>
                </Button>
            }
            </> 
        )
    }
}

export default Friday