import React, { Component } from 'react'
import Habit from './Habit'
import EditHabit from './EditHabit'
import { Icon, Segment, Header, Menu, Grid, Modal, Divider, Button} from 'semantic-ui-react'
import Navbar from './Navbar'
import { connect } from "react-redux"

import { Link } from 'react-router-dom'


class HabitContainer extends Component {
       
    constructor(props){  
        super(props);  
        this.state = {  
             h: [],
             modalOpenCp: false
          }  
        }


        handleOpenCp = () => {
            this.setState({ modalOpenCp: true });
          }
        
          handleCloseCp = () => {
            this.setState({ modalOpenCp: false })
          }
        


        componentDidMount = () =>
        {
            fetch("http://localhost:3000/habits")
            .then(response => response.json())
            .then(habits => this.setState({h: habits}))
        }

        
    handleEdit = () => {
    }

    handleDelete = () => {
    }

    render() {
        const productGroup = this.state.h.map( i => {
            return (
            <div>
               <Header as="h3" style={{marginBottom:".5%"}}>{i.title}</Header> 
                
                
                <i>{i.description} </i>
               <br></br>  
               <Habit habit={i}/> <Button color="teal" basic size="mini" onClick={this.handleOpenCp}><Icon name="pencil alternate"/> </Button>
                <Button color="teal" basic size="mini"><Icon name="trash"></Icon></Button><br></br><br></br>
        
                <Modal 
            open={this.state.modalOpenCp}
            onClose={this.handleCloseCp}
            closeIcon>
            <Modal.Content>
              <EditHabit habit={i} handleClose={this.handleCloseCp} />
            </Modal.Content>
          </Modal>
            </div>
            )
        })
        return (
            <div>
            <Navbar/>
            <Grid stackable columns={2} >
              <Grid.Column style={{width:"300px"}}> 
                <Menu vertical style={{height:"100%"}}>
                    <Menu.Item><Link to="/yourhabits"><Icon name="calendar check"></Icon>Dashboard</Link></Menu.Item>
                    <Menu.Item><Link to="/habits"><Icon name="list"/>Manage Habits</Link></Menu.Item>
                    <Menu.Item><Link to="/createhabit"><Icon name="external alternate"></Icon>Add Habit</Link></Menu.Item>
                    <Menu.Item><Link to="/createhabit"><Icon name="sign out alternate"></Icon>Logout</Link></Menu.Item>
                </Menu>
                </Grid.Column>
                <Grid.Column>
                <Segment style={{width:"700px"}}>
                    {productGroup} </Segment>
                </Grid.Column> 
            </Grid>
            </div>
        )}}
    
        const mapStateToProps = (state) => {
            return { 
               habits: state.habits
            }
        }

export default connect (mapStateToProps)(HabitContainer)