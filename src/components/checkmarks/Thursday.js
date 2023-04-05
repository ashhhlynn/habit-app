import Calendar from 'react-calendar'
import React, { Component } from 'react'
import { Form, Grid, Button, Icon} from 'semantic-ui-react'

class Thursday extends Component {

        
    state = {
        Thursday: false,
        day: []
    }

    componentDidMount = () => {
        if (this.props.habit.day_of_weeks.find(d => d.name === "Thursday")){
        let dow = this.props.habit.day_of_weeks.find(d => d.name === "Thursday")

 if (dow.done) {
        this.setState({Thursday: true })}
        else {
            this.setState({Thursday: false })}        
    }

    }


    handlePatchDOW = (event, id) => {
        event.preventDefault()
        let t = id
        console.log(t)
        this.setState({Thursday: true })

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
                window.alert("Success!")
            }
        })
    }    

    handleNotDoneDOW = (event, id) => {
        event.preventDefault()
        this.setState({Thursday: false })

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
                window.alert("Success!")
                console.log(data)
            }
        })
    } 
    
    render() {

        let dow = this.props.habit.day_of_weeks.find(hd => hd.name === "Thursday")


        return (
            <>
                    {this.state.Thursday === false ?

            <Button size="tiny"id="Thursday" style={{backgroundColor: "#ffffff"}} onClick={(event) => {this.handlePatchDOW(event, dow.id)}} >
            <Icon name="minus square outline" color="black" size="big"></Icon></Button>       
            :
            <Button size="tiny"  id="Thursday" style={{backgroundColor: "#ffffff"}} onClick={(event) => {this.handleNotDoneDOW(event, dow.id)}} >
            <Icon name="checkmark" color="teal" size="big"></Icon>
            </Button>
            }
            </> 
        )
    }
}

export default Thursday