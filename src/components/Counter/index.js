import React, { PropTypes, Component } from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import style from './counter.scss'

export default class Counter extends Component {
  increment = (e) => {
    this.props.incrementCounter()
  }

  render () {
    const {counter} = this.props

    return (
      <Row>
        <Col md={12}>
          <h3>Count: {counter}</h3>
          <p>Click the button to increment the counter</p>
          <Button className={style.button} onClick={this.increment}>
            Increment
          </Button>
        </Col>
      </Row>
    )
  }
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  incrementCounter: PropTypes.func.isRequired
}
