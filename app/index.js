import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import NavBar from './components/NavBar'

class App extends React.Component {
  render() {
  	
    return (
      <div className="container">
        <NavBar />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)