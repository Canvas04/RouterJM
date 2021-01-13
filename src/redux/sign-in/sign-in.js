import { registration } from '../../constants/constants'

const { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_WRONG } = registration
const initialState = {
  isLogin: false,
  user: {
    id: '',
    email: '',
    createdAt: '',
    username: '',
    bio: null,
    image: null,
    token: ' ',
  },
}

export default (state = { isLogin: false }, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return { ...action.payload, isLogin: true }

    case SIGN_IN_WRONG:
      const invalidData = action.payload['email or password']
      return { invalidData, isLogin: false }
    default:
      return state
  }
}
