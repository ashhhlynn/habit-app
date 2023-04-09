import React, { Component } from 'react'
import { Divider } from 'semantic-ui-react'

class Navbar extends Component {
       
    render() {       
        return (
           <div>
                <br></br>
                <h1 style={{marginTop: "3.5%", fontFamily:"segoe Script", fontSize:"44px"}}>Habitify</h1>
                <Divider></Divider>
           </div>
        )
    }
}

export default Navbar