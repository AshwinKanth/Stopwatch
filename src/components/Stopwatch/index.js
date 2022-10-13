import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, timeInSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  renderTimerInMinutes = () => {
    const {timeInSeconds} = this.state
    const minutes = Math.floor(timeInSeconds / 60)
    const stringifiedMinute = minutes > 9 ? minutes : `0${minutes}`

    return stringifiedMinute
  }

  renderTimerInSeconds = () => {
    const {timeInSeconds} = this.state
    const seconds = Math.floor(timeInSeconds % 60)

    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return stringifiedSeconds
  }

  onStartTimer = () => {
    this.timerId = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  updateTime = () => {
    this.setState(prevState => ({timeInSeconds: prevState.timeInSeconds + 1}))
  }

  onStopTimer = () => {
    clearInterval(this.timerId)
    this.setState({isTimerRunning: false})
  }

  onResetTimer = () => {
    clearInterval(this.timerId)
    this.setState({isTimerRunning: false, timeInSeconds: 0})
  }

  render() {
    const {isTimerRunning} = this.state
    const timer = `${this.renderTimerInMinutes()}:${this.renderTimerInSeconds()}`
    return (
      <div className="app-container">
        <div className="bg-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="stopwatch-container">
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="name">Timer</p>
            </div>
            <h1 className="timer">{timer}</h1>

            <div className="button-container">
              <button
                className="button start-button"
                type="button"
                disabled={isTimerRunning}
                onClick={this.onStartTimer}
              >
                Start
              </button>
              <button
                className="button stop-button"
                type="button"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                className="button Reset-button"
                type="button"
                onClick={this.onResetTimer}
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
