import React, { Component, PropTypes } from 'react'
import ReactDOM from "react-dom"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import $ from 'jquery'

import './about.scss'

class About extends Component {

  render () {
    return (
      <Grid className="about-page">
        <Row>
          <Col md={12}>
            <h1>About Page</h1>

            <LinkContainer to="/">
              <Button>Go to Home page &rarr;</Button>
            </LinkContainer>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default About
