import React, { Component } from 'react'
import { Button, Icon} from 'semantic-ui-react'

class Wednesday extends Component {

    handlePatchDOW = (event) => {
        event.preventDefault()
        let t = this.props.dow.id
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

    handleNotDoneDOW = (event) => {
        event.preventDefault()
        let t = this.props.dow.id
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
                this.props.editHabit(data)
            }
        })
    } 
    
    render() {
        return (
            <>
            {!this.props.dow.done ?
            <Button size="tiny"id="Wednesday" onClick={(event) => {this.handlePatchDOW(event)}} >
            <Icon name="minus square" color="black" size="small"></Icon></Button>       
            :
            <Button size="tiny"  id="Wednesday" style={{backgroundColor: "#ffffff"}} onClick={(event) => {this.handleNotDoneDOW(event)}} >
            <Icon name="checkmark" color="teal" size="big"></Icon>
            </Button>
            }
            </> 
        )
    }
}

export default Wednesday