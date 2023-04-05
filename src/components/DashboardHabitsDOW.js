import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import Tuesday from './checkmarks/Tuesday'
import Monday from './checkmarks/Monday'
import Wednesday from './checkmarks/Tuesday'
import Thursday from './checkmarks/Thursday'
import Friday from './checkmarks/Friday'
import Saturday from './checkmarks/Saturday'
import Sunday from './checkmarks/Sunday'

class DashboardHabitsDOW extends Component {

        state = {  
            su: [],
            sa: [],
            fr: [],
            th: [],
            we:[],
            tu:[],
            mo:[]
        }  
    


        componentDidMount = () => {
            console.log(this.props.habit.day_of_weeks)
        }
    
    setIt = (monday) =>
    {
        this.setState({mo: [...this.state.mo, monday]})
    }
 
    
    
    

    
    

    render() {      
        let su = this.props.habit.day_of_weeks.find(hd => hd.name === "Sunday") 
        let sa = this.props.habit.day_of_weeks.find(hd => hd.name === "Saturday")  
        let fr = this.props.habit.day_of_weeks.find(hd => hd.name === "Friday") 
        let th = this.props.habit.day_of_weeks.find(hd => hd.name === "Thursday")  
        let we = this.props.habit.day_of_weeks.find(hd => hd.name === "Wednesday") 
        let mo = this.props.habit.day_of_weeks.find(hd => hd.name === "Monday")
        let tu = this.props.habit.day_of_weeks.find(hd => hd.name === "Tuesday") 

  
        return (  
            <>
            <Table.Row>
                <Table.Cell>{this.props.habit.title}</Table.Cell> 
                { this.props.habit.day_of_weeks.find(hd => hd.name === "Monday") ?  
                    <Table.Cell>
                        <Monday habit={this.props.habit}/>
                    </Table.Cell>
                :  
                    <Table.Cell>
                    </Table.Cell>
                }
                { this.props.habit.day_of_weeks.find(hd => hd.name === "Tuesday") ? 
                    <Table.Cell>
                        < Tuesday habit={this.props.habit}/>
                    </Table.Cell>
                :  
                    <Table.Cell>
                    </Table.Cell>
                }
                { (this.props.habit.day_of_weeks.find(hd => hd.name === "Wednesday")) ? 
                    <Table.Cell>
                        < Wednesday dow={we}/>
                    </Table.Cell>
                :  
                    <Table.Cell>
                    </Table.Cell>
                }             
                {this.props.habit.day_of_weeks.find(hd => hd.name === "Thursday") ? 
                    <Table.Cell>
                        < Thursday dow={th}/>
                    </Table.Cell>
                :     
                    <Table.Cell>
                    </Table.Cell>
                }
                {this.props.habit.day_of_weeks.find(hd => hd.name === "Friday") ? 
                    <Table.Cell>
                        < Friday dow={fr}/>
                    </Table.Cell>
                :     
                    <Table.Cell>
                    </Table.Cell>   
                }
                {this.props.habit.day_of_weeks.find(hd => hd.name === "Saturday") ? 
                    <Table.Cell>
                        < Saturday dow={sa}/>
                    </Table.Cell>
                :     
                    <Table.Cell>
                    </Table.Cell>
                }
                {this.props.habit.day_of_weeks.find(hd => hd.name === "Sunday") ? 
                    <Table.Cell>
                        < Sunday dow={su}/>
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

export default DashboardHabitsDOW 