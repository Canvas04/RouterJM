import { registration } from '../../constants/constants'

const { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_WRONG } = registration

export default (state = '', action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return action.payload

    case SIGN_IN_WRONG:
      const invalidData = action.payload['email or password']
      return { invalidData }
    default:
      return state
  }
}
