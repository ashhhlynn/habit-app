import React, { Component } from 'react'
import { Container, Menu, Grid, Header, Divider } from 'semantic-ui-react'

class Navbar extends Component {
       
    render() {       
        return (
           <div><br></br>
                <h1 style={{marginTop: "-.5%", fontFamily:"segoe Script", fontSize:"44px"}}>Habitify</h1>
                <Divider></Divider>
                <br></br><br></br>
           </div>
        )
    }
}

export default Navbar