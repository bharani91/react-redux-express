import {createStore, applyMiddleware, compose} from 'redux'
import promise from 'redux-promise'
import rootReducer from '../reducers'
import {routerMiddleware} from 'react-router-redux'

export default function configureStore (history, initialState = {}) {
  let middlewares = applyMiddleware(promise, routerMiddleware(history))

  // if (__DEV__) {
  middlewares = compose(middlewares, window.devToolsExtension
    ? window.devToolsExtension()
    : (f) => f
  )
  // }

  const store = middlewares(createStore)(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
