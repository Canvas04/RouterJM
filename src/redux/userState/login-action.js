import { registration, baseUrl } from '../../constants/constants'

const { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_WRONG, LOG_OUT } = registration
const { url, login, sign_up } = baseUrl
const status = {
  SUCCESS: 'success',
  ERROR: 'error',
}

const requestLogin = () => ({
  type: LOGIN_REQUEST,
})

const successLogin = (payload) => ({
  type: LOGIN_SUCCESS,
  status: status.SUCCESS,
  payload,
})

const wrongLogin = (payload) => ({
  type: LOGIN_WRONG,
  status: status.ERROR,
  payload,
})

export default (user, url1 = '',url2='',token='',method='POST') => {
  return async (dispatch) => {
    
    dispatch(requestLogin())
    try {
      const attemptSignIn = await fetch(`${url}${url1}/${url2}`, {
        method: method,
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
           Authorization: token 
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

export const logOut = () => ({ type: LOG_OUT })
