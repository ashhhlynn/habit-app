import React, { Component } from 'react'
import MyCalendar from './MyCalendar'
import { Button} from 'semantic-ui-react'


class Habit extends Component {

    render() {
       const dow = this.props.habit.day_of_weeks.map(i => {
            return (
            <>
            <Button circular size="tiny" color="teal">{i.name.charAt(0)}</Button>
            </>
        )}) 
        return (
            <>
                {dow}
            </>
        )
    }

}
export default Habit