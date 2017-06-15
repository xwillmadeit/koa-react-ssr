import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  onClick() {
    axios
      .post('/users', {
        id: 12345
      })
      .then(function(response) {
        console.log(response)
      })
      .catch(function(error) {
        console.log(error)
      })
  }
  render() {
    return (
      <div>
        <h2>this is a server side rendering react example</h2>

        <button onClick={this.onClick.bind(this)}>click</button>
      </div>
    )
  }
}

export default App
