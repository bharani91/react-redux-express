import React, {PropTypes} from 'react'
import Header from "../components/Header"

const App = function({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App
