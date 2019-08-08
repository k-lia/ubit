import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import isAuthenticated from '../lib/isAuthenticated'

export default class Signup extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loggedin: isAuthenticated()
    }
  }

  submit(event) {
    event.preventDefault()
    event.stopPropagation()

    let form = event.target
    let formData = new FormData(form)
    let params = new URLSearchParams(formData)

    
    // Send request to the server
    fetch('/api/signup', {
      method: 'POST',
      body: params
    }).then( (res) => {
      return res.json()
    }).then(data => {
      localStorage.setItem('token', data.token)
      this.setState({loggedin: true})
    }).catch( (err) => {
      console.error(err)
    })
  }

  render() {
    if ( this.state.loggedin ) {
      return (
        <Redirect
          to={{
            pathname: '/',
            state: { from: this.props.location }
          }}
        />
      )
    } else {
      return (
        <div>
          <h1>Signup</h1>
          <form onSubmit={this.submit.bind(this)}>
            <div>
              <label>Username: </label>
              <input type="text" name="username" pattern=".{2,16}" required />
            </div>
            <div>
              <label>Password: </label>
              <input type="password" name="password" pattern=".{6,20}" required />
            </div>
            <div>
              <input type="submit" value="Sign up" />
            </div>
          </form>
        </div>
      )
    }
  }
}
