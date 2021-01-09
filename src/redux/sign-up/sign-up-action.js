import { registration, baseUrl } from '../../constants/constants'

const { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_WRONG } = registration
const { url, sign_up } = baseUrl
const status = {
  SUCCESS: 'success',
  ERROR: 'error',
}

const requestRegistration = () => ({
  type: SIGN_UP_REQUEST,
})

const successRegistration = (payload) => ({
  type: SIGN_UP_SUCCESS,
  status: status.SUCCESS,
  payload,
})

const wrongRegistration = (payload) => ({
  type: SIGN_UP_WRONG,
  status: status.ERROR,
  payload,
})

export default (user) => {
  return async (dispatch) => {
    dispatch(requestRegistration())
    try {
      const attemptSignUP = await fetch(`${url}${sign_up}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: user,
      })
      if (attemptSignUP.ok) {
        const successRequest = await attemptSignUP.json()
        dispatch(successRegistration(successRegistration(successRequest)))
      } else {
          const dataAboutErrors = await attemptSignUP.json()
        throw dataAboutErrors
      }
    } catch (error) {
    
      dispatch(wrongRegistration(error.errors))
    }
  }
}
