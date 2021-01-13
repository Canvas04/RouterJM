import React from 'react'
import Registration from '../registration/registration'
import _ from 'lodash/fp'
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
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import updateUser from '../../redux/userState/login-action'

export default () => {
  const { register, handleSubmit, errors } = useForm()
  const dispatch = useDispatch()
  const tokenUser = 'Token ' + useSelector(store => store.userState.user.token)
  
  const onSubmit = (data) => {
    const { username, email, newPassword: password,avatarImage: image } = data
    const objForUpdatingUser = {
      user: {
        username,
        email,
        password,
        image
      },
    }

    dispatch(updateUser(JSON.stringify(objForUpdatingUser),'user','',tokenUser,'PUT'))
  }
  return (
    <>
      <Registration />
      <FormWrapper>
        <FormComponent onSubmit={handleSubmit(onSubmit)}>
          <Header>Edit Profile</Header>
          <Label>
            <NameField>Username</NameField>
            <Input
              name="username"
              placeholder="Username"
              autoFocus
              ref={register({
    
                required: true,
                maxLength: 20,
                minLength: 3,
                pattern: /^[A-Za-z]+$/i,
              })}
              className="form-control form-control-sm"
            />
          </Label>
          {_.get('username.type', errors) === 'required' && (
            <WarningLabel>This field is required</WarningLabel>
          )}
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
            />
          </Label>
          {_.get('email.type', errors) === 'pattern' && (
            <WarningLabel>Email is not correct</WarningLabel>
          )}
          {_.get('email.type', errors) === 'required' && (
            <WarningLabel>This field is required</WarningLabel>
          )}
          <Label>
            <NameField>New password</NameField>
            <Input
              name="newPassword"
              placeholder="Password"
              ref={register({
                required: true,
                minLength: 8,
                maxLength: 40,
                pattern: /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*/,
              })}
              error={_.get('newPassword.type', errors) === 'minLength'}
              className="form-control form-control-sm"
            />
          </Label>

          {_.get('newPassword.type', errors) === 'required' && (
            <WarningLabel>This field is required</WarningLabel>
          )}
          {_.get('newPassword.type', errors) === 'pattern' && (
            <WarningLabel>
              Password field: at least one number, one uppercase letter and one
              lowercase
            </WarningLabel>
          )}
          {_.get('newPassword.type', errors) === 'minLength' && (
            <WarningLabel>
              Password must contain at least 8 characters
            </WarningLabel>
          )}
          {_.get('newPassword.type', errors) === 'maxLength' && (
            <WarningLabel>
              Password must contain no more 40 characters
            </WarningLabel>
          )}
          <Label>
            <NameField>Avatar image(url)</NameField>
            <Input
              name="avatarImage"
              placeholder="avatarImage"
              ref={register({
                pattern: /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
              })}
              error={_.get('newPassword.type', errors) === 'minLength'}
              className="form-control form-control-sm"
            />
          </Label>
          {_.get('avatarImage.type', errors) === 'pattern' && (
            <WarningLabel>Incorrect url</WarningLabel>
          )}
          <Button style={{ marginTop: '9px' }} type="submit">
            Save
          </Button>
        </FormComponent>
      </FormWrapper>
    </>
  )
}
