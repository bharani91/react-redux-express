import React, { Component, PropTypes } from 'react'
import { LinkContainer } from "react-router-bootstrap"
import { Grid, Row, Col, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { incrementCounter } from '../../actions/counterActions'
import { Link } from "react-router"
import Counter from "../../components/Counter"

import style from './home.scss'


class Home extends Component {
  render () {
    return (
      <Grid className="home-page">
        <Row>
          <Col md={12}>
            <h1>Home Page</h1>

            <Counter
              counter={this.props.counter}
              incrementCounter={this.props.incrementCounter}
            />

            <br /><br />

            <LinkContainer to="/about">
              <Button>
                Go to About page &rarr;
              </Button>
            </LinkContainer>
          </Col>
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps, { incrementCounter })(Home);
