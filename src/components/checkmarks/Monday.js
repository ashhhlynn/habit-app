import React, { Component } from 'react'
import { Button, Icon} from 'semantic-ui-react'

class Monday extends Component {

    state = {
        Monday: false,
        day: []
    }

    componentDidMount = () => {
        if (this.props.habit.day_of_weeks.find(d => d.name === "Monday")){
            let dow = this.props.habit.day_of_weeks.find(d => d.name === "Monday")
            this.setState({day: dow })
            if (dow.done) {
                this.setState({Monday: true })}
            else {
                this.setState({Monday: false })
            }        
        }
    }

    handlePatchDOW = (event, id) => {
        event.preventDefault()
        this.setState({Monday: true })
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
                window.alert("Marked as complete.")
            }
        })
    }    

    handleNotDoneDOW = (event, id) => {
        event.preventDefault()
        this.setState({Monday: false })
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
        let dow = this.state.day
        return (
            <>
            {this.state.Monday === false ?
                <Button size="tiny"id="Monday"   style={{backgroundColor: "#ffffff"}} onClick={(event) => {this.handlePatchDOW(event, dow.id)}} >
                    <Icon name="close" color="black" size="big"></Icon></Button>       
            :
                <Button size="tiny"  id="Monday" style={{backgroundColor: "#ffffff"}} onClick={(event) => {this.handleNotDoneDOW(event, dow.id)}} >
                    <Icon name="checkmark" color="teal" size="big"></Icon>
                </Button>
            }
            </> 
        )
    }
}

export default Monday