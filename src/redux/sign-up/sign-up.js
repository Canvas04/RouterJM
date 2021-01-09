import { registration } from '../../constants/constants'

const { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_WRONG } = registration

export default (state = '', action) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return { user: action.payload.payload }

      case SIGN_UP_WRONG:
        const {email,username} = action.payload

          return {email,username}
    default:
      return state
  }
}
