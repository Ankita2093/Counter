import React, { Component } from 'react'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0,
    }
  }

  increment = () => {
    this.setState({ number: this.state.number + 1 })
  }

  decrement = () => {
    this.setState({ number: this.state.number - 1 })
  }

  neutral = () => {
    this.setState({ number: 0 })
  }
  render() {
    return (
      <div
        style={{
          marginTop: '10%',
          border: '5px solid black',

          width: '50%',
          marginLeft: '25%',
        }}
      >
        <h1 style={{ margin: '2%' }}> React Counter</h1>
        <h1>{this.state.number}</h1>
        <button
          className='btn btn-success '
          onClick={this.increment}
          style={{ backgroundColor: 'green', color: 'white' }}
        >
          Increment
        </button>
        <button
          className='btn btn-danger '
          onClick={this.decrement}
          style={{ backgroundColor: 'red', marginLeft: '2%', color: 'white' }}
        >
          Decrement
        </button>
        <button
          className='btn btn-primar '
          onClick={this.neutral}
          style={{ backgroundColor: 'blue', marginLeft: '2%', color: 'white' }}
        >
          Neutral
        </button>
      </div>
    )
  }
}

export default Main
