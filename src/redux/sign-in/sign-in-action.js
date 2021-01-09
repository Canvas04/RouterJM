import { registration, baseUrl } from '../../constants/constants'

const { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_WRONG } = registration
const { url, login ,sign_up} = baseUrl
const status = {
  SUCCESS: 'success',
  ERROR: 'error',
}

const requestLogin = () => ({
  type: SIGN_IN_REQUEST,
})

const successLogin = (payload) => ({
  type: SIGN_IN_SUCCESS,
  status: status.SUCCESS,
  payload,
})

const wrongLogin = (payload) => ({
  type: SIGN_IN_WRONG,
  status: status.ERROR,
  payload,
})

export default (user) => {
    return async (dispatch) => {
      dispatch(requestLogin())
      try {
        const attemptSignIn = await fetch(`${url}${sign_up}/${login}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: user,
        })
        if (attemptSignIn.ok) {
          const successRequest = await attemptSignIn.json()
          dispatch(successLogin(successRequest))
        } else {
            const dataAboutErrors = await attemptSignIn.json()
          throw dataAboutErrors
        }
      } catch (error) {
      
        dispatch(wrongLogin(error.errors))
      }
    }
  }