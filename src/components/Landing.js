import React, { Component } from 'react'
import CurrentUser from './CurrentUser'
import YourHabits from './YourHabits'
import { Segment, Header, Divider} from 'semantic-ui-react'
import { checkUser } from "./actions/rootActions"
import { connect } from "react-redux"
import { fetchHabits } from './actions/rootActions'


class Landing extends Component {
          

    componentDidMount = () => {
        this.props.fetchHabits()
        const token = localStorage.token;
        console.log(token)
        return fetch('http://localhost:3000/profile', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
        },
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.message) {
                localStorage.removeItem("token")
            }
            else {
                this.setState({currentUser: data.user})
                console.log(data.user)
                this.props.checkUser(data.user)
            }            
        })
    }


    render() {
        return (
            !this.props.currentUser ?
                <div className="landingpg">
                    <center>
                        <Segment style={{width:"700px"}}>
                            <CurrentUser/>
                        </Segment>
                    </center> 
               </div> 
           :
                <YourHabits/>
        )     
    }
}

const mapStateToProps = (state) => {
    return { 
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
      checkUser: (data) =>  { dispatch(checkUser(data)) }, 
      fetchHabits: () =>  { dispatch(fetchHabits()) }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)