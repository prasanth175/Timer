// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {time: 0, minute: 0, second: 0}

  onStart = () => {
    this.timerId = setInterval(this.tick, 1000)
  }

  tick = () => {
    const {time} = this.state

    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    this.setState(prev => ({
      minute: minutes,
      second: seconds,
      time: prev.time + 1,
    }))
  }

  onStop = () => {
    clearInterval(this.timerId)
  }

  onReset = () => {
    clearInterval(this.timerId)
    this.setState({time: 0, minute: 0, second: 0})
  }

  render() {
    const {minute, second} = this.state

    return (
      <div className="all">
        <div className="main">
          <h1>Stopwatch</h1>
          <div className="mid">
            <div className="top">
              <img
                className="watch"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
                alt="stopwatch"
              />
              <p>Timer</p>
            </div>
            <h1>
              {minute < 10 ? `0${minute}` : minute}:
              {second < 10 ? `0${second}` : second}
            </h1>
            <div className="buttons">
              <button className="greenBtn" type="button" onClick={this.onStart}>
                Start
              </button>
              <button className="redBtn" type="button" onClick={this.onStop}>
                Stop
              </button>
              <button
                className="yellowBtn"
                type="button"
                onClick={this.onReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
