import * as types from 'constants/counterConstants'

export function incrementCounter () {
  return {
    type: types.INCREMENT
  }
}
