import React, { Component } from 'react'
import { Button, Icon} from 'semantic-ui-react'

class Sunday extends Component {

        
    state = {
        Sunday: false,
        day: []
    }

    componentDidMount = () => {
        if (this.props.habit.day_of_weeks.find(d => d.name === "Sunday")){
        let dow = this.props.habit.day_of_weeks.find(d => d.name === "Sunday")

 if (dow.done) {
        this.setState({Sunday: true })}
        else {
            this.setState({Sunday: false })}        
    }

    }


    handlePatchDOW = (event, id) => {
        event.preventDefault()
        let t = id
        console.log(t)
        this.setState({Sunday: true })

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
        this.setState({Sunday: false })

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

        let dow = this.props.habit.day_of_weeks.find(hd => hd.name === "Sunday")


        return (
            <>
                    {this.state.Sunday === false ?

            <Button size="tiny"id="Sunday" style={{backgroundColor: "#ffffff"}} onClick={(event) => {this.handlePatchDOW(event, dow.id)}} >
            <Icon name="close" color="black" size="big"></Icon></Button>       
            :
            <Button size="tiny"  id="Sunday" style={{backgroundColor: "#ffffff"}} onClick={(event) => {this.handleNotDoneDOW(event, dow.id)}} >
            <Icon name="checkmark" color="teal" size="big"></Icon>
            </Button>
            }
            </> 
        )
    }
}

export default Sunday