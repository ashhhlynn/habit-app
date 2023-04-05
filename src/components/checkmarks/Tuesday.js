import Calendar from 'react-calendar'
import React, { Component } from 'react'
import { Form, Grid, Button, Icon} from 'semantic-ui-react'

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
        this.setState({Tuesday: true })}
        else {
            this.setState({Tuesday: false })}        
    }
else {
    this.setState({day: [] })

}

}


    handlePatchDOW = (event, id) => {
        event.preventDefault()
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
            })})
        .then(resp => resp.json())
        .then(data => {
            if (data.message) {
                window.alert(data.message)
            }
            else {
                window.alert("Thank you! Your order was submitted.")
            }
        })
    }    

    handleNotDoneDOW = (event, id) => {
        event.preventDefault()
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
                window.alert("Thank you! Your order was submitted.")
                console.log(data)
            }
        })
    } 
    
    render() {
let dow = this.state.day
        return (
            <>
            {!dow.done ?
            <Button size="tiny"id="Tuesday" style={{backgroundColor: "#ffffff"}} onClick={(event) => {this.handlePatchDOW(event, dow.id)}} >
            <Icon name="minus square outline" color="black" size="big"></Icon></Button>       
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