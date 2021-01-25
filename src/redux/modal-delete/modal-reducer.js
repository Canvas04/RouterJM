import { modal } from '../../constants/constants'

const { OPENED, CLOSED } = modal

export default (state = { isOpened: false }, action) => {
  switch (action.type) {
    case OPENED:
      return { isOpened: true }
    case CLOSED:
      return { isOpened: false }
    default:
      return state
  }
}
