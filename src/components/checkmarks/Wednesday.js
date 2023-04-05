import React, { Component } from 'react'
import { Button, Icon} from 'semantic-ui-react'

class Wednesday extends Component {

    
    state = {
        Wednesday: false,
        day: []
    }

    componentDidMount = () => {
        if (this.props.habit.day_of_weeks.find(d => d.name === "Wednesday")){
            let dow = this.props.habit.day_of_weeks.find(d => d.name === "Wednesday")
            this.setState({day: dow})

 if (dow.done) {
        this.setState({Wednesday: true })}
        else {
            this.setState({Wednesday: false })}        
    }

    }

    handlePatchDOW = (event, id) => {
        event.preventDefault()
        this.setState({Wednesday: true })

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
        this.setState({Wednesday: false })

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
            {this.state.Wednesday === false ?
            <Button size="tiny"id="Wednesday" style={{backgroundColor: "#ffffff"}} onClick={(event) => {this.handlePatchDOW(event, dow.id)}} >
            <Icon name="minus square outline" color="black" size="big"></Icon></Button>       
            :
            <Button size="tiny"  id="Wednesday" style={{backgroundColor: "#ffffff"}} onClick={(event) => {this.handleNotDoneDOW(event, dow.id)}} >
            <Icon name="checkmark" color="teal" size="big"></Icon>
            </Button>
            }
            </> 
        )
    }
}

export default Wednesday