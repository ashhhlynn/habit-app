import React, { Component } from 'react'

import { Button, Menu, Icon, Table, Grid } from 'semantic-ui-react'

class YourHabitsDOW extends Component {

    handlePatchDOW = (event) => {
        event.preventDefault()
        let o = this.props.habit.day_of_weeks.find(i => i.name === event.target.id)
        let t = o.id
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
    

    render() {     

        return (  
            <>
            <Table.Row >
                <Table.Cell>{this.props.habit.title}</Table.Cell>
                {
              
              this.props.habit.day_of_weeks.find(hd => hd.name === "Monday") ?  
                        <Table.Cell>
                        <Button size="tiny"  id="Monday" style={{backgroundColor: "#ffffff"}} onClick={(event) => {this.handlePatchDOW(event)}} >
                        
                        
                       { this.props.habit.day_of_weeks.find(hd => hd.name === "Monday" && hd.done === "false") ?  

                        <Icon name="square outline" size="big"></Icon> 
                        :
                        <Icon name="checkmark" size="big"></Icon> 

                        }
                        </Button>  
                        </Table.Cell>  
                    :  
                        <Table.Cell>
                     
                        </Table.Cell>
                 
                }


            {this.props.habit.day_of_weeks.find(hd => hd.name === "Tuesday") ? 

                  this.props.habit.day_of_weeks.find(hd => hd.name === "Tuesday" && hd.done === "null") ?
                  <Table.Cell>

                    <Button size="tiny"id="Tuesday" style={{backgroundColor: "#ffffff"}} onClick={(event) => {this.handlePatchDOW(event)}} >
                        <Icon name="square outline" size="big"></Icon></Button>       
                        </Table.Cell>

                    :
                    <Table.Cell>

                    <Button size="tiny"  id="Tuesday" style={{backgroundColor: "#ffffff"}} onClick={(event) => {this.handlePatchDOW(event)}} >
                    <Icon name="checkmark" size="big"></Icon>
                    </Button>
                    </Table.Cell>
        
            :  
            <Table.Cell>                    </Table.Cell>


            }

{
                (this.props.habit.day_of_weeks.find(hd => hd.name === "Wednesday")) ? 
                     this.props.habit.day_of_weeks.find(hd => hd.done === 0 && hd.name === "Wednesday") ? 
                        <Table.Cell>
                        <Button size="tiny"  id="Wednesday" style={{backgroundColor: "#ffffff"}} onClick={(event) => {this.handlePatchDOW(event)}} >
                        <Icon name="square" size="big"></Icon> </Button>  
                        </Table.Cell>  
                    :  
                        <Table.Cell>
                        <Button size="tiny"  id="Wednesday" style={{backgroundColor: "#ffffff"}} onClick={(event) => {this.handlePatchDOW(event)}} >
                        <Icon name="checkmark" size="big"></Icon>
                        </Button>
                        </Table.Cell>
                :  
                    <Table.Cell>
                    </Table.Cell>
                }

{this.props.habit.day_of_weeks.find(hd => hd.name === "Thursday") ? 
      <Table.Cell> <Button size="tiny" style={{backgroundColor: "#ffffff"}} id="Thursday" onClick={(event) => {this.handlePatchDOW(event)}} >
<Icon name="square outline" size="big"></Icon></Button>     </Table.Cell>:
        
        <Table.Cell></Table.Cell>

        }

{this.props.habit.day_of_weeks.find(hd => hd.name === "Friday") ? 
      <Table.Cell>
<Icon name="square outline" size="big"></Icon>     </Table.Cell>:
        
        <Table.Cell></Table.Cell>

        }
        {this.props.habit.day_of_weeks.find(hd => hd.name === "Saturday") ? 
      <Table.Cell>
<Icon name="square outline" size="big"></Icon>       </Table.Cell>:
        
        <Table.Cell></Table.Cell>

        }
        {this.props.habit.day_of_weeks.find(hd => hd.name === "Sunday") ? 
      <Table.Cell>
<Icon name="square outline" size="big"></Icon>       </Table.Cell>:
        
        <Table.Cell></Table.Cell>

        }



      </Table.Row>
     
    






           </>
        )
    
}

}
export default YourHabitsDOW 