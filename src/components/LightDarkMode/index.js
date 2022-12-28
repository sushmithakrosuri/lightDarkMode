// Write your code here
import React from 'react'
import './index.css'

class LightDarkMode extends React.Component {
  state = {darkModeOn: true}

  changeMode = () => {
    const {darkModeOn} = this.state
    this.setState({darkModeOn: !darkModeOn})
  }

  render() {
    const {darkModeOn} = this.state
    return (
      <div>
        {darkModeOn ? (
          <div className="container darkMode">
            <h1>Click To Change Mode</h1>
            <button onClick={this.changeMode}>Light Mode</button>
          </div>
        ) : (
          <div className="container lightMode">
            <h1>Click To Change Mode</h1>
            <button onClick={this.changeMode}>Dark Mode</button>
          </div>
        )}
      </div>
    )
  }
}

export default LightDarkMode
