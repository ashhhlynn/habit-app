import Calendar from 'react-calendar'
import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class CreateHabitButtons extends Component {
       
    state = {

days: [],
Monday: true,
tuesday: true,
wednesday: true,
thursday: true,
friday: true,
saturay: true,
sunday: true,


    }

    handleDOW = (event) => {
        event.preventDefault()
        this.setState((prevState) => ({ active: !prevState.active }))

        console.log(event.target.id)
        this.state.days.push(event.target.id)
        console.log(this.state.days)
    }

  handleClick = () =>
    this.setState((prevState) => ({ active: !prevState.active }))

  render() {
    const { active } = this.state

    return (
      <div>
    

<Button toggle active={active} id="Monday" circular color="teal" onClick={this.handleDOW}>M</Button>
<Button toggle active={active} id="Tuesday" circular color="teal" onClick={this.handleDOW}>T</Button>
<Button toggle active={active} id="Wednesday"  circular color="teal" onClick={this.handleDOW}>W</Button>
<Button toggle active={active} id="Thursday" circular color="teal" onClick={this.handleDOW} >TR</Button>
<Button toggle active={active} id="Friday"  circular color="teal" onClick={this.handleDOW} >F</Button>
<Button toggle active={active} id="Saturday"  circular color="teal" onClick={this.handleDOW} >SA</Button>
<Button toggle active={active} id="Sunday" circular color="teal" onClick={this.handleDOW}>S</Button><br></br><br></br>
</div>
    )
  }


}
export default CreateHabitButtons