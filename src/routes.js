import React from 'react'
import {Route} from 'react-router'
import App from 'pages/App'
import Home from 'pages/Home'
import About from 'pages/About'
import NotFound from 'pages/NotFound'

const routes = (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='*' component={NotFound} />
  </Route>
)

export default routes
