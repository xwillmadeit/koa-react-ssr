import React, { Component } from 'react'

class App extends Component {
  onClick() {
    console.log('it works...')
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
