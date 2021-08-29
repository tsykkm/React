import React, { Component } from 'react'
// import './Stopwatch.css'

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLive: false,
      currentTime: 0,
      startTime: 0
    }
    this.timerId = 0
  }

  UNSAFE_componentWillMount() {
    // set timer
    this.timerId = setInterval(e => this.tick(), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerId)
  }
  // per 1sec
  tick() {
    if (this.state.isLive) {
      this.setState({ currentTime: new Date().getTime() })
    }
  }

  clickHandler(e) {
    // stop
    if (this.state.isLive) {
      this.setState({ isLive: !this.state.isLive })
      return
    }
    // start
    const now = new Date().getTime()
    this.setState({
      currentTime: now,
      startTime: now,
      isLive: !this.state.isLive
    })
  }

  getDisp() {
    console.log('---getDisp---')
    console.log(this.state.currentTime)
    console.log(this.state.startTime)
    const delta = this.state.currentTime - this.state.startTime
    const t = Math.floor(delta / 1000)
    console.log(delta)
    const ss = t % 60
    console.log(ss)
    const m = Math.floor(t / 60)
    const mm = m % 60
    const hh = Math.floor(mm / 60)
    const z = num => {
      const s = '00' + String(num)
      return s.substr(s.length - 2, 2)
    }
    return (
      <span className="disp">
        {z(hh)}:{z(mm)}:{z(ss)}
      </span>
    )
  }
  render() {
    let label = 'START'
    if (this.state.isLive) label = 'STOP'
    const disp = this.getDisp()
    const fclick = e => this.clickHandler(e)
    return (
      <div className="Stopwatch">
        <div>{disp}</div>
        <button onClick={fclick}>{label}</button>
      </div>
    )
  }
}

export default Stopwatch
