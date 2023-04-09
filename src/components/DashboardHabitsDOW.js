import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import Tuesday from './checkmarks/Tuesday'
import Monday from './checkmarks/Monday'
import Wednesday from './checkmarks/Wednesday'
import Thursday from './checkmarks/Thursday'
import Friday from './checkmarks/Friday'
import Saturday from './checkmarks/Saturday'
import Sunday from './checkmarks/Sunday'

class DashboardHabitsDOW extends Component {

    render() {      
        return (  
            <>
            <Table.Row>
                <Table.Cell>{this.props.habit.title}</Table.Cell> 
                {this.props.habit.day_of_weeks.find(d => d.name === "Monday") ? 
                    <Table.Cell>
                        <Monday habit={this.props.habit}/>
                    </Table.Cell>
                :
                    <Table.Cell>
                    </Table.Cell>}
                {this.props.habit.day_of_weeks.find(d => d.name === "Tuesday") ? 
                    <Table.Cell>
                        < Tuesday habit={this.props.habit}/>
                    </Table.Cell>
                :  
                    <Table.Cell>
                    </Table.Cell>
                }      
                {this.props.habit.day_of_weeks.find(d => d.name === "Wednesday") ? 
                    <Table.Cell>
                        < Wednesday habit={this.props.habit}/>
                    </Table.Cell>
                :  
                    <Table.Cell>
                    </Table.Cell>
                }             
                {this.props.habit.day_of_weeks.find(hd => hd.name === "Thursday") ? 
                    <Table.Cell>
                        < Thursday habit={this.props.habit}/>
                    </Table.Cell>
                :     
                    <Table.Cell>
                    </Table.Cell>
                }
                {this.props.habit.day_of_weeks.find(hd => hd.name === "Friday") ? 
                    <Table.Cell>
                        < Friday habit={this.props.habit}/>
                    </Table.Cell>
                :     
                    <Table.Cell>
                    </Table.Cell>   
                }
                {this.props.habit.day_of_weeks.find(hd => hd.name === "Saturday") ? 
                    <Table.Cell>
                        < Saturday habit={this.props.habit}/>
                    </Table.Cell>
                :     
                    <Table.Cell>
                    </Table.Cell>
                }
                {this.props.habit.day_of_weeks.find(hd => hd.name === "Sunday") ? 
                    <Table.Cell>
                        < Sunday habit={this.props.habit}/>
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