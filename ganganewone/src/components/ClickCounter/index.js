// Write your code here
import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  increaseCount = () => {
    const {count} = this.state
    console.log(`Ganga Increased is working ${count}`)
    this.setState({count: count + 1})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div>
          <h1 className="headName">
            The Button has been clicked{' '}
            <span className="span-text">{count}</span> times{' '}
          </h1>
          <p>Click the button to increase the count! </p>
          <button onClick={this.increaseCount}>Click Me!</button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
