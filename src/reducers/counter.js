import * as types from '../constants/counterConstants'

export default function counter (state = 0, action) {
  switch (action.type) {
    case types.INCREMENT:
      return state + 1
    default:
      return state
  }
}
