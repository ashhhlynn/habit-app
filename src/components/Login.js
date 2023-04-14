import React, { Component } from "react"
import { Form } from "semantic-ui-react"
import { checkUser } from "./actions/rootActions"
import { connect } from "react-redux"

class Login extends Component {

    state = {
        email: '',
        password: '',
    }

    handleChange = (event) => {
        this.setState ({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event, userData)  => {
        event.preventDefault()
        return fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                user: userData,
            })
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.message) {
                window.alert(data.message)
            }
            else {
                localStorage.token = data.jwt;
                this.props.checkUser()
                this.props.handleClose();
            }
        })
    }
    
    render() {
        return (
            <>          
            <h2 style={{fontWeight:"normal"}}>Sign In</h2>
            <Form onSubmit={ (event) => { this.handleSubmit(event, this.state)}}>
                <Form.Input
                    required
                    id="email"
                    placeholder="Email"
                    value={this.state.email} 
                    onChange={this.handleChange}
                />               
                <Form.Input
                    required
                    id="password"
                    placeholder="Password"
                    type="password"
                    value={this.state.password} 
                    onChange={this.handleChange}
                /> 
                <Form.Button content='Submit' />
            </Form>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
      checkUser: () =>  { dispatch(checkUser()) } 
    }
}

export default connect(null, mapDispatchToProps)(Login)