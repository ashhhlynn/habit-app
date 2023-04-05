import React, { Component } from 'react'
import { Button, Icon} from 'semantic-ui-react'
import { editHabit } from '../actions/rootActions'
import { connect } from "react-redux"

class Monday extends Component {

    state = {
        checkeroo: 'no'
    }

    handleDoneDOW = (event, id) => {
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
                done: 1
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
                this.props.editHabit(data)
            }
        })
    } 
    
    render() {
        let dow = this.props.habit.day_of_weeks.find(d => d.name === "Monday")
        console.log(dow)
        return (
            <>
                        {!dow.done ?
            <Button size="tiny"id="Monday"   style={{backgroundColor: "#ffffff"}} onClick={(event) => {this.handleDoneDOW(event, dow.id)}} >
            <Icon name="minus square outline" color="black" size="big"></Icon></Button>       
            :
            <Button size="tiny"  id="Monday" style={{backgroundColor: "#ffffff"}} onClick={(event) => {this.handleNotDoneDOW(event, dow.id)}} >
            <Icon name="checkmark" color="teal" size="big"></Icon>
            </Button>
            }
            </> 
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
      editHabit: (habit) =>  { dispatch(editHabit(habit)) }

    }
}

export default connect(null, mapDispatchToProps)(Monday)