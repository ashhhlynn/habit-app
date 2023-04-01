import React, { Component } from 'react'
import { Button, Icon} from 'semantic-ui-react'

class Monday extends Component {

    handlePatchDOW = (event) => {
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
    
    render() {
        return (
            <>
            {!this.props.dow.done ?
            <Button size="tiny"id="Monday" style={{backgroundColor: "#ffffff"}} onClick={(event) => {this.handlePatchDOW(event)}} >
            <Icon name="minus" color="red" size="big"></Icon></Button>       
            :
            <Button size="tiny"  id="Monday" style={{backgroundColor: "#ffffff"}} onClick={(event) => {this.handlePatchDOW(event)}} >
            <Icon name="checkmark" color="teal" size="big"></Icon>
            </Button>
            }
            </> 
        )
    }
}

export default Monday 