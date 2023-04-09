import React, { Component } from "react"
import { Form } from 'semantic-ui-react'
import { createUser } from "./actions/rootActions"
import { connect } from "react-redux"

class Signup extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    }

    handleSubmit = (event, userData) => {
        event.preventDefault()
            return fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                user: userData
            })
            })
            .then(resp => resp.json())
            .then(data => {
                if (data.message) {
                    window.alert(data.message)
                }
                else {
                    localStorage.token = data.jwt;
                    this.props.createUser(data.user)
                }
            })
        }

    handleChange = (event) => {
        this.setState ({
            [event.target.id]: event.target.value
        })
    }

    render() {
        return (
            <>
            <h2 style={{fontWeight:"normal"}}>Register</h2>
            <Form onSubmit={ (event) => {this.handleSubmit(event, this.state)} }>              
                <Form.Input
                    required
                    type="text"
                    id="name"
                    placeholder="Name"
                    value={this.state.name} 
                    onChange={this.handleChange}            
                />
                <Form.Input
                    required
                    type="text"
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
                <Form.Input
                    required
                    id="password_confirmation"
                    placeholder="Confirm Password"
                    type="password"
                    value={this.state.password_confirmation} 
                    onChange={this.handleChange}
                />
                <Form.Button content="Submit"/>
            </Form>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
      createUser: (data) =>  { dispatch(createUser(data)) }, 
    }
}


export default connect(null, mapDispatchToProps)(Signup)