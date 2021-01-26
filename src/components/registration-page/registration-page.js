import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash/fp'
import styled from 'styled-components'
import Registration from '../registration/registration'
import { useForm } from 'react-hook-form'
import { withRouter } from 'react-router-dom'
import login from '../../redux/userState/login-action'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { setCookie } from '../sign-in/sign-in'
const SignUp = ({ history }) => {
  const { register, handleSubmit, errors, getValues } = useForm()
  const dispatch = useDispatch()
  const onSubmit = (data) => {
    const { username, email, newPassword: password } = data
    const objForRegistration = {
      user: {
        username,
        email,
        password,
      },
    }
    dispatch(login(JSON.stringify(objForRegistration), 'users'))
    setCookie('email', email)
    setCookie('password', password)
  }
  const isLogin = useSelector((store) => store.userState.isLogin)
  useEffect(() => {
    if (isLogin) {
      history.push('/')
    }
  })
  const repeatedEmailAndUsername = useSelector((store) => store.userState)
  const { email, username } = repeatedEmailAndUsername
  return (
    <>
      <Registration />
      <FormWrapper>
        <FormComponent onSubmit={handleSubmit(onSubmit)}>
          <Header>Create new account</Header>
          <Label label='username'>
            <NameField>Username</NameField>
            <Input
              name='username'
              placeholder='Username'
              autoFocus
              ref={register({
                required: true,
                maxLength: 20,
                minLength: 3,
                pattern: /^[A-Za-z]+$/i,
              })}
              className='form-control form-control-sm'
            />
          </Label>
          {_.get('username.type', errors) === 'required' && (
            <WarningLabel>This field is required</WarningLabel>
          )}
          {_.get('username.type', errors) === 'maxLength' && (
            <WarningLabel>Username cannot exceed 20 characters</WarningLabel>
          )}
          {_.get('username.type', errors) === 'minLength' && (
            <WarningLabel>
              Username must contain at least 3 characters
            </WarningLabel>
          )}
          {_.get('username.type', errors) === 'pattern' && (
            <WarningLabel>Alphabetical characters only</WarningLabel>
          )}
          {username && <WarningLabel>Username {username.join()}</WarningLabel>}
          <Label>
            <NameField>Email adress</NameField>
            <Input
              name='email'
              placeholder='Email adress'
              ref={register({
                required: true,
                pattern: /.+@.+\..+/i,
              })}
              className='form-control form-control-sm'
            />
          </Label>
          {_.get('email.type', errors) === 'pattern' && (
            <WarningLabel>Email is not correct</WarningLabel>
          )}
          {_.get('email.type', errors) === 'required' && (
            <WarningLabel>This field is required</WarningLabel>
          )}
          {email && <WarningLabel>Email {email.join()}</WarningLabel>}
          <Label>
            <NameField>Password</NameField>
            <Input
              name='newPassword'
              placeholder='Password'
              ref={register({
                required: true,
                minLength: 8,
                pattern: /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*/,
              })}
              error={_.get('newPassword.type', errors) === 'minLength'}
              className='form-control form-control-sm'
            />
          </Label>
          {_.get('newPassword.type', errors) === 'pattern' && (
            <WarningLabel>
              Password field: at least one number, one uppercase letter and one
              lowercase
            </WarningLabel>
          )}
          {_.get('newPassword.type', errors) === 'required' && (
            <WarningLabel>This field is required</WarningLabel>
          )}
          {_.get('newPassword.type', errors) === 'minLength' && (
            <WarningLabel>
              Password must contain at least 8 characters
            </WarningLabel>
          )}
          <Label>
            <NameField>Repeat Password</NameField>
            <Input
              name='passwordConfirmation'
              placeholder='Repeat Password'
              ref={register({
                required: 'Please confirm password!',
                validate: {
                  matchesPreviousPassword: (value) => {
                    const { newPassword } = getValues()
                    return newPassword === value || 'Passwords must match'
                  },
                },
              })}
              error={errors.passwordConfirmation}
              className='form-control form-control-sm'
            />
          </Label>
          {errors.passwordConfirmation && (
            <WarningLabel>{errors.passwordConfirmation.message}</WarningLabel>
          )}

          <Divider />
          <AgreementContainer>
            <Checkbox id='check' type='checkbox' required />
            <AgreementLabel htmlFor='check'>
              I agree to the processing of my personal information
            </AgreementLabel>
          </AgreementContainer>
          <Button type='submit'>Create</Button>
          <ContainerForLink>
            <LabelForLink>Already have an account?</LabelForLink>
            <StyledLink to='/sign-in'>Sign In</StyledLink>
          </ContainerForLink>
        </FormComponent>
      </FormWrapper>
    </>
  )
}
SignUp.propTypes = {
  history: PropTypes.object,
}
export const FormComponent = styled.form`
  max-width: 384px;
  display: flex;
  flex-direction: column;
  padding: 48px 36.5px;
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  box-shadow: 0px 22px 106px rgba(0, 0, 0, 0.07),
    0px 9.19107px 44.2843px rgba(0, 0, 0, 0.0503198),
    0px 4.91399px 23.6765px rgba(0, 0, 0, 0.0417275),
    0px 2.75474px 13.2728px rgba(0, 0, 0, 0.035),
    0px 1.46302px 7.04911px rgba(0, 0, 0, 0.0282725),
    0px 0.608796px 2.93329px rgba(0, 0, 0, 0.0196802);
  border-radius: 6px;
  margin-top: 59px;
  margin-bottom: 239px;
`
export const Header = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #262626;
  display: flex;
  justify-content: center;
  margin-bottom: 20px; ;
`
export const Label = styled.label`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`
export const NameField = styled.p`
  margin-bottom: 2px;
`
export const Input = styled.input`
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  border-radius: 4px;
  padding-left: 12px;
  padding-top: 8px;
  padding-right: 12px;
  padding-bottom: 8px;
  width: 320px;
  border-color: ${(props) => (props.error ? 'red' : '#d9d9d9')};
`
Input.propTypes = {
  error: PropTypes.bool
}

const Divider = styled.hr`
  height: 1px;
  color: #e8e8e8;
  width: 100%;
  margin-top: 9px;
  margin-bottom: 8px;
`
const AgreementContainer = styled.div`
  display: flex;
  margin-bottom: 21px;
`
const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  position: relative;
  top: 3px;
  cursor: pointer;
`
const AgreementLabel = styled.label`
  position: relative;
  left: 8px;
  margin: 0;
`
export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`
export const Button = styled.button`
  background: #1890ff;
  border-radius: 4px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 320px;
  outline: none;
  border: none;
  &:focus {
    outline: none;
  }
  margin-bottom: 8px;

  &:hover {
    background-color: rgba(24, 144, 255, 0.5);
  }
  cursor: pointer;
`
export const ContainerForLink = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  display: flex;
  justify-content: center;
`
export const StyledLink = styled(Link)`
  color: #1890ff;
  margin-left: 3px;
`
export const LabelForLink = styled.span`
  color: #8c8c8c;
`
export const WarningLabel = styled.p`
  color: #f5222d;
  margin-bottom: 12px;
  margin-top: -12px;
`
export default withRouter(SignUp)
