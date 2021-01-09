import React from 'react'
import Registration from '../registration/registration'
import { useForm } from 'react-hook-form'
import _ from 'lodash/fp'
import { useDispatch, useSelector } from 'react-redux'
import sign_in from '../../redux/sign-in/sign-in-action'
import {
  FormComponent,
  FormWrapper,
  Header,
  Label,
  WarningLabel,
  NameField,
  Input,
  Button,
  ContainerForLink,
  LabelForLink,
  StyledLink,
} from '../registration-page/registration-page'
export default () => {
  const { register, handleSubmit, errors } = useForm()
  const dispatch = useDispatch()
  const onSubmit = (data) => {
    const { email, newPassword: password } = data
    const objForRegistration = {
      user: {
        email,
        password,
      },
    }
    dispatch(sign_in(JSON.stringify(objForRegistration)))
  }
  const invalidData = useSelector((store) => store.sign_in.invalidData)

  return (
    <>
      <Registration />
      <FormWrapper>
        <FormComponent onSubmit={handleSubmit(onSubmit)}>
          <Header>Sign In</Header>
          <Label>
            <NameField>Email adress</NameField>
            <Input
              name="email"
              placeholder="Email adress"
              ref={register({
                required: true,
                pattern: /.+@.+\..+/i,
              })}
              className="form-control form-control-sm"
              autoFocus
            />
          </Label>
          {_.get('email.type', errors) === 'pattern' && (
            <WarningLabel>Email is not correct</WarningLabel>
          )}
          {_.get('email.type', errors) === 'required' && (
            <WarningLabel>This field is required</WarningLabel>
          )}
          <Label>
            <NameField>Password</NameField>
            <Input
              name="newPassword"
              placeholder="Password"
              ref={register({
                required: true,
                minLength: 8,
                pattern: /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*/,
              })}
              error={_.get('newPassword.type', errors) === 'minLength'}
              className="form-control form-control-sm"
            />
          </Label>
          
          {_.get('newPassword.type', errors) === 'required' && (
            <WarningLabel>This field is required</WarningLabel>
          )}
         
          {invalidData && <WarningLabel>Email or password {invalidData.join()}</WarningLabel>}
          <Button style={{ marginTop: '9px' }} type="submit">
            Login
          </Button>
          <ContainerForLink>
            <LabelForLink>Don’t have an account? </LabelForLink>
            <StyledLink to="/sign-up">Sign Up</StyledLink>
          </ContainerForLink>
        </FormComponent>
      </FormWrapper>
    </>
  )
}
