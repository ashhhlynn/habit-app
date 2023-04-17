import React, { Component } from 'react'
import { Button, Icon, Table} from 'semantic-ui-react'

class DowMark extends Component {

    state = {
        Monday: false,
        monday: [],
        Tuesday: false,
        tuesday: [],
        Wednesday: false,
        wednesday: [],
        Thursday: false,
        thursday: [],
        Friday: false,
        friday: [],
        Saturday: false,
        saturday: [],
        Sunday: false,
        sunday: []
    }

    updateDow = () => {
        if (this.props.habit.day_of_weeks.find(d => d.name === "Monday")){
            let dow = this.props.habit.day_of_weeks.find(d => d.name === "Monday")
            this.setState({monday: dow })
            if (dow.done) {
                this.setState({Monday: true })}
            else {
                this.setState({Monday: false })
            }        
        }
    
    
        if (this.props.habit.day_of_weeks.find(d => d.name === "Tuesday")){
            let dow = this.props.habit.day_of_weeks.find(d => d.name === "Tuesday")
            this.setState({tuesday: dow })
            if (dow.done) {
                this.setState({Tuesday: true })}
            else {
                this.setState({Tuesday: false })
            }        
        }
    
        if (this.props.habit.day_of_weeks.find(d => d.name === "Wednesday")){
            let dow = this.props.habit.day_of_weeks.find(d => d.name === "Wednesday")
            this.setState({wednesday: dow })
            if (dow.done) {
                this.setState({Wednesday: true })}
            else {
                this.setState({Wednesday: false })
            }        
        }
    }

    componentDidMount = () => {
        this.updateDow()
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
                window.alert("Marked as complete.")
                this.setState({[event.target.id]: true })
            }
        })
    }    

    handleNotDoneDOW = (event, id) => {
        event.preventDefault()
        this.setState({[event.target.id]: false })
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
        let dowmo = this.state.monday
        let dowtu = this.state.tuesday
        let dowwe = this.state.wednesday
        let dowth = this.state.thursday
        let dowfr = this.state.friday
        let dowsa = this.state.saturday
        let dowsu = this.state.sunday
        return (
            <>
                     <Table.Row>
                <Table.Cell>{this.props.habit.title}</Table.Cell> 
                {this.props.habit.day_of_weeks.find(d => d.name === "Monday") ?
                    <Table.Cell>
  {this.state.Monday === false ?
                <Button size="tiny"id="Monday"   style={{backgroundColor: "#ffffff"}} onClick={(event) => {this.handlePatchDOW(event, dowmo.id)}} >
                    <Icon name="close" color="black" size="big"></Icon></Button>       
            :
                <Button size="tiny"  id="Monday" style={{backgroundColor: "#ffffff"}} onClick={(event) => {this.handleNotDoneDOW(event, dowmo.id)}} >
                    <Icon name="checkmark" color="teal" size="big"></Icon>
                </Button>
            }
                    </Table.Cell>:
                      <Table.Cell></Table.Cell>}
{this.props.habit.day_of_weeks.find(d => d.name === "Tuesday") ? 
    <Table.Cell>
{this.state.Tuesday === false ?
                <Button size="tiny"id="Tuesday"   style={{backgroundColor: "#ffffff"}} onClick={(event) => {this.handlePatchDOW(event, dowtu.id)}} >
                    <Icon name="close" color="black" size="big"></Icon></Button>       
            :
                <Button size="tiny"  id="Tuesday" style={{backgroundColor: "#ffffff"}} onClick={(event) => {this.handleNotDoneDOW(event, dowtu.id)}} >
                    <Icon name="checkmark" color="teal" size="big"></Icon>
                </Button>}
            </Table.Cell>
            : 
<Table.Cell>
            </Table.Cell>
            }


{this.props.habit.day_of_weeks.find(d => d.name === "Wednesday") ? 
    <Table.Cell>
{this.state.Wednesday === false ?
                <Button size="tiny"id="Wednesday"   style={{backgroundColor: "#ffffff"}} onClick={(event) => {this.handlePatchDOW(event, dowwe.id)}} >
                    <Icon name="close" color="black" size="big"></Icon></Button>       
            :
                <Button size="tiny"  id="Wednesday" style={{backgroundColor: "#ffffff"}} onClick={(event) => {this.handleNotDoneDOW(event, dowwe.id)}} >
                    <Icon name="checkmark" color="teal" size="big"></Icon>
                </Button>
            }
  </Table.Cell>
  :
  <Table.Cell>
  </Table.Cell>
    }


            </Table.Row>
            </> 
        )
    }
}

export default DowMark